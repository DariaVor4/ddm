/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_GRAPHQL_ENDPOINT: string
  readonly VITE_API_ROOT_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
