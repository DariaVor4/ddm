import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { LocalStorageKeysEnum } from '../enums/local-storage-keys.enum.ts';

/**
 * Connection properties for Apollo Client Subscriptions.
 */
export const wsLink = new GraphQLWsLink(createClient({
  url: import.meta.env.VITE_API_GQLWS_ENDPOINT,
  connectionParams: () => ({
    Authorization: `Bearer ${localStorage.getItem(LocalStorageKeysEnum.AccessTokenKey)}`,
  }),
}));
