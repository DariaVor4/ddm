import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as yup from 'yup';

export const checkPasswordSecurity = async (password: string) => {
  zxcvbnOptions.setOptions({
    dictionary: zxcvbnCommonPackage.dictionary,
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
  });
  const { score } = zxcvbn(password);
  return score >= 3;
};

export const checkPassword = async (password: string, ctx: yup.TestContext) => {
  const errors: string[] = [];
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password) || /[а-яёА-ЯЁ]/g.test(password)) errors.push('маленькие и большие английские буквы');
  if (!/\d+/.test(password)) errors.push('цифры');
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) errors.push('спецсимволы');
  const isSecure = await checkPasswordSecurity(password);
  if (errors.length || !isSecure) {
    return ctx.createError({
      message: `Пароль слишком простой${errors.length ? ` и должен содержать: ${errors.join(', ')}` : ''}`,
    });
  }
  return true;
};
