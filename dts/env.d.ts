/// <reference types="vite/client" />

/* UPDATE DEPENDING ON YOUR PROJECT NEEDS */

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}