/**
 * Загрузка файла через браузер.
 * @param url Ссылка на файл.
 * @param baseUrl Базовый адрес.
 */
export const fileDownload = (url: string, baseUrl?: string | null) => {
  const fullUrl = (baseUrl === undefined ? import.meta.env.VITE_API_ROOT_ENDPOINT : '') + url;
  // alert(`fullUrl: ${fullUrl}`);
  // return;
  const link = document.createElement('a');
  link.href = fullUrl;
  link.setAttribute('download', '');
  document.body.appendChild(link);
  link.click();
  link.remove();
};
