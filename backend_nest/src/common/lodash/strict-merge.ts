import type { PartialDeep } from 'type-fest';
import { cloneDeep, merge } from 'lodash';

/**
 * Строго типизированный lodash.merge.
 * Перед слиянием выполняет глубокое клонирование первого объекта.
 * Второй объект может содержать только те поля, которые есть в первом объекте.
 */
export function strictMerge<T extends object, U extends PartialDeep<T>>(obj1: T, obj2: U): T & U {
  return merge(obj1, obj2);
}

/**
 * Строго типизированный lodash.merge.
 * Перед слиянием выполняет глубокое клонирование первого объекта.
 * Второй объект может содержать поля, которых ещё нет в первом объекте.
 */
export function strictAdditionalMerge<T, U>(obj1: T, obj2: U): T & U {
  return merge(cloneDeep(obj1), obj2);
}
