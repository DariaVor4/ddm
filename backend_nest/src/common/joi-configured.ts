import Joi from 'joi';
import ms from 'ms';

/**
 * Configured instance of Joi.
 */
const joi: Joi.Root = Joi.defaults((schema) => schema.options({
  stripUnknown: true,
  allowUnknown: false,
  convert: true,
  abortEarly: false,
  presence: 'required',
}));

/**
 * Validator for https://www.npmjs.com/package/ms
 */
export const vercelMsValidator = (value: string) => {
  const convertResult = ms(value) as number | string | undefined;
  if (typeof convertResult !== 'number' || Number.isNaN(convertResult)) {
    throw Error('value must be a string in vercel/ms format');
  }
  return value;
};

export default joi;
