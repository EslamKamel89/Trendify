import { defineStore } from "pinia";
import type { CartItem } from "~/types/app";

export default defineStore(
  piniaStoreNames.APP_STORE,
  () => {
    const isLoading = ref(false);
    const cart = ref<CartItem[]>([]);
    const checkout = ref<CartItem[]>([]);
    return {
      isLoading,
      cart,
      checkout,
    };
  },
  { persist: true },
);
