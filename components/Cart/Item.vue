<script setup lang="ts">
import type { Product } from "~/types/app";

const props = defineProps<{
  product: Product;
  selectedArray: Product[];
}>();
defineEmits<{
  selectedRadio: [];
}>();
</script>
<template>
  <div></div>
</template>
