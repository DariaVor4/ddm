import type {CodegenConfig} from '@graphql-codegen/cli';

export default {
  schema: './src/api/{schema,schema-client}.gql',
  overwrite: true,
  documents: './src/api/queries/**/*.{gql,graphql}',
  config: {
    typesPrefix: 'G',
    skipTypename: true,
    strictScalars: true,
    // avoidOptionals: {
    //   field: true,
    //   inputValue: false,
    //   object: true,
    //   defaultValue: true,
    // },
    scalars: {
      ID: 'string',
      DateTime: 'dayjs#Dayjs',
      EmailAddress: 'string',
      UUID: 'string',
    },
    // maybeValue: 'T | null',
    // inputMaybeValue: 'T | null | undefined',
  },
  generates: {
    './src/api/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withRefetchFn: true,
      },
      // preset: 'client',
    },
  },
} satisfies CodegenConfig;
