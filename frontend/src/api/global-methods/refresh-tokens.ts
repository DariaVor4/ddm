import dayjs from 'dayjs';
import { GTokenResponse } from '../generated.ts';
import { LocalStorageKeysEnum } from '../enums/local-storage-keys.enum.ts';

const { origin } = new URL(import.meta.env.VITE_API_GRAPHQL_ENDPOINT);

/**
 * Обновление пары токенов через RestAPI запрос.
 */
export async function refreshTokens(): Promise<GTokenResponse> {
  const token = localStorage.getItem(LocalStorageKeysEnum.AccessTokenKey);
  // if (!token) {
  //   throw new Error('Вы не были авторизованы');
  // }
  return fetch(`${origin}/rest/auth/refreshTokens`, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}` },
    credentials: import.meta.env.DEV ? 'include' : 'same-origin',
  }).then(async (res): Promise<GTokenResponse> => {
    const response: Record<keyof GTokenResponse, string> = await res.json();
    if (res.ok) {
      return {
        accessToken: response.accessToken,
        accessTokenExpires: dayjs(response.accessTokenExpires),
      };
    }
    throw new Error('Ошибка в ответе сервера на обновление токена доступа');
  });
}
