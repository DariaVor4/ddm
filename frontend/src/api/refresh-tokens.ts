import { GTokenResponse } from './generated.ts';
import { LocalStorageKeys } from './local-storage-keys.ts';

const { origin } = new URL(import.meta.env.VITE_API_ENDPOINT);

/**
 * Обновление пары токенов через RestAPI запрос.
 */
async function refreshTokens(): Promise<GTokenResponse> {
  const token = localStorage.getItem(LocalStorageKeys.AccessTokenKey);
  // if (!token) {
  //   throw new Error('Вы не были авторизованы');
  // }
  return fetch(`${origin}/rest/auth/refreshTokens`, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}` },
    credentials: import.meta.env.MODE === 'development' ? 'include' : 'same-origin',
  }).then(async (res): Promise<GTokenResponse> => {
    const response: Record<keyof GTokenResponse, string> = await res.json();
    if (res.ok) {
      return {
        accessToken: response.accessToken,
        accessTokenExpires: new Date(response.accessTokenExpires),
      };
    }
    throw new Error('Ошибка в ответе сервера на обновление токена доступа');
  });
}

export default refreshTokens;
