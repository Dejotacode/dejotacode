/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_SITE_URL: string;
  readonly CONTENT_SOURCE?: 'fixture' | 'api';
  readonly CONTENT_API_URL?: string;
}

interface ImportMeta { readonly env: ImportMetaEnv; }
