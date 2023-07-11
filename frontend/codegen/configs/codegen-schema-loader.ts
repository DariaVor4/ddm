import type { CodegenConfig } from '@graphql-codegen/cli';
import { API_GRAPHQL_ENDPOINT, SchemaClientPlugin, schemaGql, schemaJson } from '../utils';

export default {
  schema: API_GRAPHQL_ENDPOINT,
  overwrite: true,
  generates: {
    [schemaGql]: {
      plugins: ['schema-ast', SchemaClientPlugin],
    },
    [schemaJson]: {
      plugins: ['introspection'],
      config: { minify: true },
    },
  },
} satisfies CodegenConfig;
