import type { CodegenConfig } from '@graphql-codegen/cli';

export default {
  schema: "http://localhost:5000/graphql",
  overwrite: true,
  generates: {
    './src/api/schema.gql': {
      plugins: ['schema-ast', 'codegen-extend'],
    },
    './src/api/schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      }
    }
  }
} satisfies CodegenConfig;
