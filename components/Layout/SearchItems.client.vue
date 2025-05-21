<script setup lang="ts">
import { products } from "@/utils/fakeData";
import { Search } from "lucide-vue-next";
import type { Product } from "~/types/app";
const searchItem = ref("");
const isLoading = ref(false);
const isOpen = ref(false);
watch(searchItem, () => {
  isLoading.value = true;
  isOpen.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
  filteredProducts.value = products.filter((product) =>
    product.title.includes(searchItem.value),
  );
});

const filteredProducts = ref<Product[]>(products);
</script>
<template>
  <DropdownMenu v-model:open="isOpen">
    <DropdownMenuTrigger>
      <div class="relative w-sm items-center" v-if="!isOpen">
        <Input
          v-model="searchItem"
          placeholder="Kitchen Accessories"
          class="border-0 pl-10 shadow-lg hover:!border-0 focus:!border-0 active:!border-0"
        />
        <span
          class="absolute inset-y-0 start-0 flex items-center justify-center px-2"
        >
          <Search class="text-muted-foreground size-4" v-if="!isLoading" />
          <Icon
            name="eos-icons:bubble-loading"
            class="text-muted-foreground mb-1 size-5"
            v-else
          />
        </span>
      </div>
      <div class="w-sm" v-else></div>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="-translate-y-5 bg-white/90">
      <div class="relative w-sm items-center">
        <Input
          v-model="searchItem"
          autofocus
          placeholder="Kitchen Accessories"
          class="border-0 pl-10 shadow-lg hover:scale-110 hover:!border-0 focus:!border-0 active:!border-0"
        />
        <span
          class="absolute inset-y-0 start-0 flex items-center justify-center px-2"
        >
          <Search class="text-muted-foreground size-4" v-if="!isLoading" />
          <Icon
            name="eos-icons:bubble-loading"
            class="text-muted-foreground mb-1 size-5"
            v-else
          />
        </span>
      </div>
      <template v-for="product in filteredProducts" :key="product.id">
        <DropdownMenuLabel>
          <div class="flex items-center space-x-2">
            <div class="h-12 w-12 rounded-full">
              <img
                :src="product.url"
                :alt="product.title"
                class="rounded-full object-cover"
              />
            </div>
            <div>
              {{ product.title }}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
      </template>
      <template v-if="!filteredProducts.length">
        <div class="mx-3 my-2 text-sm text-gray-400">
          There are no products found
        </div>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
