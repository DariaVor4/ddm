import client from '../api/apollo-client';
import { LocalStorageKeys } from '../api/local-storage-keys';

const app = {
  logout: async () => {
    // localStorage.clear();
    localStorage.removeItem(LocalStorageKeys.AccessTokenKey);
    await client.clearStore(); // To reset the cache without refetching active queries
    // window.location.href = '/';
    window.location.reload();
  },
};

export default app;
