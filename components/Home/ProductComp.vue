<script setup lang="ts">
import type { Product } from "~/types/app";

const props = defineProps<{
  product: Product;
}>();
const price = computed(() => props.product.price / 100);
const oldPrice = computed(() => ((props.product.price * 1.2) / 100).toFixed(2));
</script>
<template>
  <div class="cursor-pointer rounded-lg border shadow">
    <NuxtLink :to="`items/${product.id}`">
      <div class="h-[300px] overflow-hidden">
        <img
          :src="product.url"
          class="h-[300px] w-full rounded-t-lg object-cover transition-all duration-500 hover:scale-120"
        />
      </div>
      <div class="px-2 pb-2">
        <div class="flex items-start justify-start gap-3 pt-1">
          <div class="font-semibold text-red-500">{{ price }}</div>
          <div class="text-sm font-light text-gray-500 line-through">
            {{ oldPrice }}
          </div>
        </div>
        <div class="relative -top-1.5 text-xs font-semibold text-red-400">
          Extra 5% off
        </div>
        <div class="flex items-center space-x-2 text-sm">
          <div>5000+ sold</div>
          <div class="flex items-center space-x-1">
            <Icon name="lucide:star" class="text-amber-600" /><span>4.7</span>
          </div>
        </div>
        <div class="line-clamp-1 text-sm">
          {{
            product.title.substring(0, 60) +
            (product.title.length > 60 ? "..." : "")
          }}
        </div>
        <Badge variant="default" class="hover: bg-green-600 hover:bg-green-800"
          >Free Shipping</Badge
        >
      </div>
    </NuxtLink>
  </div>
</template>
