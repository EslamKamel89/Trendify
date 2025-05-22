<script setup lang="ts">
import { products as fakeProducts } from "~/utils/fakeData";
const products = ref(fakeProducts.slice(0, 2));
</script>
<template>
  <div v-if="false" class="flex flex-col items-center justify-center">
    <div class="h-[500px] overflow-hidden">
      <img
        src="/images/empty-cart.png"
        alt="empty cart"
        class="object-cover transition-all duration-1000 hover:scale-110"
      />
    </div>
    <div class="mt-4 text-center font-bold">No Items Yet?</div>
    <Button class="mt-4 rounded-full px-12">Sign in</Button>
  </div>
  <div
    v-else
    class="flex w-full flex-col rounded shadow-lg lg:flex-row lg:justify-between"
  >
    <div class="w-[65%]">
      <div class="rounded-lg bg-white p-4">
        <div class="mb-2 text-lg font-bold">Shopping Cart(0)</div>
        <div
          v-if="products.length"
          v-for="product in products"
          :key="product.id"
        >
          {{ product.title }}
        </div>
      </div>
    </div>
  </div>
</template>
