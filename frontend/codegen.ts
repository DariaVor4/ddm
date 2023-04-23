import type { CodegenConfig } from '@graphql-codegen/cli';

export default {
  schema: "./src/api/schema.gql",
  overwrite: true,
  documents: "./src/api/queries/**/*.{gql,graphql}",
  config: {
    typesPrefix: 'G',
    skipTypename: true,
    strictScalars: true,
    avoidOptionals: {
      field: false,
      inputValue: true,
      object: true,
      defaultValue: true,
    },
    scalars: {
      ID: 'string',
      DateTime: 'string',
    }
    // maybeValue: 'T | null',
    // inputMaybeValue: 'T | null',
  },
  generates: {
    "./src/api/generated.ts": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      // preset: 'client',
    },
  }
} satisfies CodegenConfig;
