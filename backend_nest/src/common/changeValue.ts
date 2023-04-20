export function changeValue(obj: any) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      changeValue(obj[key]);
    } else {
      // eslint-disable-next-line no-param-reassign
      obj[key] = true;
    }
  }
  return obj;
}
