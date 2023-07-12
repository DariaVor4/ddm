import { useUserCurrentQuery } from '../../api/generated.ts';
import { LocalStorageKeysEnum } from '../../api/enums/local-storage-keys.enum.ts';

export const useCurrentUser = () => {
  const { data: { current } = {}, loading } = useUserCurrentQuery({
    skip: !localStorage.getItem(LocalStorageKeysEnum.AccessTokenKey),
  });
  return [current, loading] as const;
};
