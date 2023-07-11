/* eslint-disable @typescript-eslint/no-use-before-define,no-return-assign */
import {
  ApolloClient, ApolloLink, fromPromise, InMemoryCache, makeVar, split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import { withScalars } from 'apollo-link-scalars';
import dayjs, { isDayjs } from 'dayjs';
import { Kind } from 'graphql/language';
import { GraphQLScalarType } from 'graphql/type';
import { buildClientSchema, IntrospectionQuery } from 'graphql/utilities';
import { isString, merge } from 'lodash';
import { toast } from 'react-toastify';
import { Id } from 'react-toastify/dist/types';
import { AppRoutesEnum } from '../../routes/app-routes.enum.ts';
import { globalNavigateVar } from '../../store/global-navigate.ts';
import { GTokenResponse } from '../generated.ts';
import { LocalStorageKeysEnum } from '../enums/local-storage-keys.enum.ts';
import { refreshTokens } from '../global-methods/refresh-tokens.ts';
import * as introspectionResult from '../schema.json';
import { typePolicies } from './apollo-type-policies.ts';
import { httpLink } from './apollo-http-link.ts';
import { wsLink } from './apollo-ws-link.ts';

/**
 * Auth helper for handle login and logout.
 */
export const authHelper = {
  login: async (data: GTokenResponse) => {
    const isTokenUndefinedBefore = !localStorage.getItem(LocalStorageKeysEnum.AccessTokenKey);
    localStorage.setItem(LocalStorageKeysEnum.AccessTokenKey, data.accessToken);
    localStorage.setItem(LocalStorageKeysEnum.AccessTokenExpiresKey, data.accessTokenExpires.toISOString());
    if (isTokenUndefinedBefore) {
      globalNavigateVar()(AppRoutesEnum.HomeRoute);
      await client.resetStore().catch(() => undefined);
    }
  },
  logout: async () => {
    // console.debug('logging out...');
    localStorage.removeItem(LocalStorageKeysEnum.AccessTokenKey);
    localStorage.removeItem(LocalStorageKeysEnum.AccessTokenExpiresKey);
    globalNavigateVar()(AppRoutesEnum.HomeRoute);
    await client.resetStore().catch(() => 123);
  },
};

/**
 * Middleware for add authorization header.
 */
const authOnlineLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(LocalStorageKeysEnum.AccessTokenKey);
  operation.setContext(merge(operation.getContext(), {
    headers: { authorization: token ? `Bearer ${token}` : undefined },
  }));
  return forward(operation).map(value => {
    // console.debug('authLink', value);
    if (offlineToastKey) {
      isConnectionLostVar(false);
      toast.dismiss(offlineToastKey);
      client.resetStore();
      offlineToastKey = undefined;
    }
    return value;
  });
});

// const authLink = setContext(async (_, prevContext) => {
//   console.debug('authLink');
//   const token = localStorage.getItem(LocalStorageKeys.AccessTokenKey);
//   return merge(prevContext, {
//     headers: { authorization: token ? `Bearer ${token}` : undefined },
//   });
// });

/**
 * Single promise for refresh token.
 */
let refreshPromise: Promise<string> | undefined;
let offlineToastKey: Id | undefined;
export const isConnectionLostVar = makeVar(false);

/**
 * Middleware for handle errors and refresh token.
 */
const errorLink = onError(({
  graphQLErrors, networkError, operation, forward,
}) => {
  // console.debug('errorLink');
  const isTokenExpired = graphQLErrors?.reduce<boolean>((acc, graphQLError) => {
    const isUnauthorized = (graphQLError?.extensions?.originalError as any)?.statusCode === 401;
    if (!isUnauthorized) {
      toast.error(`[GraphQLError]: ${graphQLError.message}`, { autoClose: 15000 });
      console.error('[GraphQLError in Middleware]', graphQLError);
    }
    return acc && isUnauthorized;
  }, !!localStorage.getItem(LocalStorageKeysEnum.AccessTokenKey));
  if (networkError) {
    console.error('[NetworkError in Middleware]', networkError);
    if (/Error when attempting to fetch resource/ig.test(networkError.message)) {
      isConnectionLostVar(true);
      offlineToastKey ??= toast.error('No connection!', { position: 'top-center' });
    } else {
      toast.error(`[NetworkError]: ${networkError.message}`, { autoClose: 15000 });
    }
  }
  if (isTokenExpired) {
    // console.debug('REFRESH_TOKEN');
    return fromPromise<string>(refreshPromise ??= refreshTokens()
      .then(async data => {
        if (!data.accessToken) throw new Error('New accessToken not found in response');
        await authHelper.login(data);
        return data.accessToken;
      })
      .catch(async error => {
        console.error('[REFRESH_TOKEN_ERROR]', error);
        await authHelper.logout();
        throw error;
      })
      .finally(() => refreshPromise = undefined))
      .filter(value => !!value)
      .flatMap(token => {
        operation.setContext(merge(operation.getContext(), {
          headers: { authorization: token ? `Bearer ${token}` : undefined },
        }));
        return forward(operation);
      });
  }
  return forward(operation);
});

const scalarsLink = withScalars({
  typesMap: {
    DateTime: new GraphQLScalarType({
      name: 'DateTime',
      serialize: (date: unknown) => (isDayjs(date) ? date.toISOString() : date),
      parseValue: (str: unknown) => (isString(str) ? dayjs(str) : str),
      parseLiteral: ast => (ast.kind === Kind.STRING || ast.kind === Kind.INT
        ? dayjs(ast.value)
        : null),
    }),
  },
  schema: buildClientSchema((introspectionResult as unknown) as IntrospectionQuery),
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (definition.kind === 'OperationDefinition' && definition.operation === 'subscription');
  },
  wsLink,
  httpLink,
);

/**
 * Main GraphQL Apollo Client.
 */
export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, scalarsLink, authOnlineLink, splitLink]),
  cache: new InMemoryCache({ typePolicies }),
  defaultOptions: {
    query: {
      notifyOnNetworkStatusChange: true,
    },
    mutate: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      notifyOnNetworkStatusChange: true,
    },
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
  connectToDevTools: import.meta.env.MODE === 'development',
  queryDeduplication: true,
});
