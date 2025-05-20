<script setup lang="ts">
import { Search } from "lucide-vue-next";

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
    product.name.includes(searchItem.value),
  );
});
type Product = {
  id: number;
  name: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Stainless Steel Whisk",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    name: "Silicone Spatula Set",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 3,
    name: "Ceramic Mixing Bowls",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 4,
    name: "Kitchen Shears",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 5,
    name: "Wooden Cutting Board",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 6,
    name: "Measuring Cups Set",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 7,
    name: "Glass Measuring Jug",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 8,
    name: "Vegetable Peeler",
    image: "https://picsum.photos/300/300",
  },
];
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
    <DropdownMenuContent class="-translate-y-5 bg-white/50">
      <div class="relative w-sm items-center">
        <Input
          v-model="searchItem"
          autofocus
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
      <template v-for="product in filteredProducts" :key="product.id">
        <DropdownMenuLabel>
          <div class="flex items-center space-x-2">
            <div class="h-12 w-12 rounded-full">
              <img
                :src="product.image"
                :alt="product.name"
                class="rounded-full object-cover"
              />
            </div>
            <div>
              {{ product.name }}
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
