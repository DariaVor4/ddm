/* eslint-disable @typescript-eslint/no-use-before-define,no-return-assign */
import {
  ApolloClient, ApolloLink, createHttpLink, fromPromise, InMemoryCache, makeVar,
} from '@apollo/client';
import { isString, merge } from 'lodash';
import { onError } from '@apollo/client/link/error';
import { withScalars } from 'apollo-link-scalars';
import { buildClientSchema, IntrospectionQuery } from 'graphql/utilities';
import { GraphQLScalarType } from 'graphql/type';
import dayjs, { isDayjs } from 'dayjs';
import { Kind } from 'graphql/language';
import { toast } from 'react-toastify';
import { Id } from 'react-toastify/dist/types';
import { LocalStorageKeys } from './local-storage-keys';
import { GTokenResponse } from './generated';
import AppRoutesEnum from '../views/routes.enum';
import globalNavigateVar from '../store/global-navigate.ts';
import * as introspectionResult from './schema.json';
import refreshTokens from './refresh-tokens.ts';

/**
 * Auth helper for handle login and logout.
 */
export const authHelper = {
  login: async (data: GTokenResponse) => {
    const isTokenUndefinedBefore = !localStorage.getItem(LocalStorageKeys.AccessTokenKey);
    localStorage.setItem(LocalStorageKeys.AccessTokenKey, data.accessToken);
    localStorage.setItem(LocalStorageKeys.AccessTokenExpiresKey, data.accessTokenExpires.toISOString());
    if (isTokenUndefinedBefore) {
      globalNavigateVar()(AppRoutesEnum.Home);
      await client.resetStore().catch(() => undefined);
    }
  },
  logout: async () => {
    console.log('logging out...');
    localStorage.removeItem(LocalStorageKeys.AccessTokenKey);
    localStorage.removeItem(LocalStorageKeys.AccessTokenExpiresKey);
    globalNavigateVar()(AppRoutesEnum.Home);
    await client.resetStore().catch(() => 123);
  },
};

/**
 * Middleware for add authorization header.
 */
const authOnlineLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(LocalStorageKeys.AccessTokenKey);
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
//   console.log('authLink');
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
  }, !!localStorage.getItem(LocalStorageKeys.AccessTokenKey));
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
    console.debug('REFRESH_TOKEN');
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

/**
 * Connection properties for Apollo Client.
 */
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  credentials: import.meta.env.MODE === 'development' ? 'include' : 'same-origin',
});

/**
 * Main GraphQL Apollo Client.
 */
const client = new ApolloClient({
  link: ApolloLink.from([errorLink, scalarsLink, authOnlineLink, httpLink]),
  cache: new InMemoryCache(),
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

export default client;
