// /* eslint-disable no-nested-ternary */
// import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { PrismaSelect } from '@paljs/plugins';
//
// /**
//  * Decorator for prisma select object by GraphQLResolveInfo
//  */
// export const PrismaSelector = createParamDecorator(
//   (key: keyof PrismaSelect | undefined | 'select', context: ExecutionContext) => {
//     const info = GqlExecutionContext.create(context).getInfo();
//     const select = new PrismaSelect(info);
//     return key === 'select'
//       ? select.value[key]
//       : key
//         ? select[key]
//         : select;
//   },
// );
