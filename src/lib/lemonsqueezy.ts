import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js';

export const lemonsqueezy = {
  createCheckout: async (options: any) => {
    return createCheckout({
      storeId: process.env.VITE_LEMONSQUEEZY_STORE_ID!,
      variantId: options.variantId,
      customData: options.customData,
      checkoutOptions: {
        ...options.checkoutOptions,
        dark: true,
      },
    });
  }
};