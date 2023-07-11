import { createHttpLink } from '@apollo/client';

/**
 * Connection properties for Apollo Client HTTP.
 */
export const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_GRAPHQL_ENDPOINT,
  credentials: import.meta.env.MODE === 'development' ? 'include' : 'same-origin',
});
