/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LEMONSQUEEZY_STORE_ID: string
  readonly VITE_LEMONSQUEEZY_STARTER_VARIANT_ID: string
  readonly VITE_LEMONSQUEEZY_PRO_VARIANT_ID: string
  readonly VITE_LEMONSQUEEZY_BUSINESS_VARIANT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}