/**
 * Метод для поиска значения заголовка в сырых заголовках
 * @param rawHeaders - Сырые заголовки
 * @param title - Имя заголовка, после которого нужно взять значение
 * @param key - Строка после которой должно быть значение, будет обрезана из результата
 * @returns Значение заголовка
 */
export const findInRawHeaders = (rawHeaders: string[] | undefined, title: string, key?: string) => {
  if (!rawHeaders) {
    return undefined;
  }
  const titleLowerCase = title.toLowerCase();
  const index = rawHeaders.findIndex((header, i) => {
    const isTitleMatch = header.toLowerCase() === titleLowerCase;
    const isStartsWithKey = !key || (i + 1 < rawHeaders.length && rawHeaders[i + 1]?.toLowerCase().startsWith(key.toLowerCase()));
    return isTitleMatch && isStartsWithKey;
  });
  return index >= 0 ? rawHeaders[index + 1].slice(key?.length) : undefined;
};
