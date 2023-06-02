/* eslint-disable @typescript-eslint/ban-ts-comment */
/** ************************************************************************************************************* */
/* Source: https://github.com/nestjs/graphql/blob/master/packages/graphql/lib/type-helpers/partial-type.helper.ts */
/** ************************************************************************************************************* */

import { Type } from '@nestjs/common';
import { isFunction } from '@nestjs/common/utils/shared.utils';
import { ClassDecoratorFactory } from '@nestjs/graphql/dist/interfaces/class-decorator-factory.interface';
import { getFieldsAndDecoratorForType } from '@nestjs/graphql/dist/schema-builder/utils/get-fields-and-decorator.util';
import {
  applyIsOptionalDecorator, inheritPropertyInitializers, inheritTransformationMetadata, inheritValidationMetadata,
} from '@nestjs/mapped-types';
import { Field } from '@nestjs/graphql';
import { applyFieldDecorators } from '@nestjs/graphql/dist/type-helpers/type-helpers.utils';
import { METADATA_FACTORY_NAME } from '@nestjs/graphql/dist/plugin/plugin-constants';
import { SetRequired } from 'type-fest';

export function SetRequiredType<T, K extends keyof T>(
  classRef: Type<T>,
  keys: readonly K[],
  decorator?: ClassDecoratorFactory,
): Type<SetRequired<T, typeof keys[number]>> {
  const { fields, decoratorFactory } = getFieldsAndDecoratorForType(classRef);

  abstract class CustomObjectType {
    constructor() {
      inheritPropertyInitializers(this, classRef);
    }
  }
  if (decorator) {
    decorator({ isAbstract: true })(CustomObjectType);
  } else {
    decoratorFactory({ isAbstract: true })(CustomObjectType);
  }

  inheritValidationMetadata(classRef, CustomObjectType);
  inheritTransformationMetadata(classRef, CustomObjectType);

  fields.forEach((item) => {
    if (isFunction(item.typeFn)) {
      /**
       * Execute type function eagerly to update the type options object (before "clone" operation)
       * when the passed function (e.g., @Field(() => Type)) lazily returns an array.
       */
      item.typeFn();
    }
    Field(item.typeFn, { ...item.options, nullable: keys.includes(item.name as K) ? false : item.options.nullable })(
      CustomObjectType.prototype,
      item.name,
    );
    applyIsOptionalDecorator(CustomObjectType, item.name);
    applyFieldDecorators(CustomObjectType, item);
  });

  // @ts-ignore
  const graphqlMetadataFactory = CustomObjectType[METADATA_FACTORY_NAME];

  if (graphqlMetadataFactory) {
    const pluginFields = Object.keys(graphqlMetadataFactory());
    pluginFields.forEach((key) => applyIsOptionalDecorator(CustomObjectType, key));
  }

  Object.defineProperty(CustomObjectType, 'name', {
    value: `SetRequired${classRef.name}`,
  });
  return CustomObjectType as Type<SetRequired<T, typeof keys[number]>>;
}
