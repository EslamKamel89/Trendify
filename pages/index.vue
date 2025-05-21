<script setup lang="ts">
import type { Product } from "~/types/app";
import { products as fakeProducts } from "~/utils/fakeData";
const products = ref<Product[]>(fakeProducts);
</script>
<template>
  <div class="h-full w-full">
    <div
      v-if="products.length"
      class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="product in products" :key="product.id">
        <HomeProductComp :product="product" />
      </div>
    </div>
  </div>
</template>
