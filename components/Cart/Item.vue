<script setup lang="ts">
import type { Product } from "~/types/app";

const props = defineProps<{
  product: Product;
  selectedArray: Product[];
}>();
const emit = defineEmits<{
  selectedRadio: [];
}>();
const appStore = useAppStore();
const { cart } = storeToRefs(appStore);
const isSelected = ref(false);
const removeFromCart = () => {
  cart.value.forEach((product, index) => {});
};
</script>
<template>
  <div class="my-2 flex justify-start"></div>
</template>
