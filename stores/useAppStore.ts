import { defineStore } from "pinia";
import type { Product } from "~/types/app";
import { products as fakeProducts } from "~/utils/fakeData";

export default defineStore(
  piniaStoreNames.APP_STORE,
  () => {
    const isLoading = ref(false);
    const cart = ref<Product[]>(fakeProducts.slice(0, 2));
    const checkout = ref<Product[]>([]);
    return {
      isLoading,
      cart,
      checkout,
    };
  },
  { persist: true },
);
