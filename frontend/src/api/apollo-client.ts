import {
  ApolloClient, ApolloLink, createHttpLink, InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { merge } from 'lodash';
import { LocalStorageKeys } from './local-storage-keys';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT,
  credentials: import.meta.env.MODE === 'development' ? 'include' : 'same-origin',
});

const authLink = setContext(async (_, ctx) => {
  const token = localStorage.getItem(LocalStorageKeys.AccessTokenKey);
  return merge(ctx, {
    headers: {
      authorization: token ? `Bearer ${token}` : undefined,
    },
  });
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: import.meta.env.MODE === 'development',
  resolvers: {},
});

export default client;
