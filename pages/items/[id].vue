<script setup lang="ts">
const id = Number(useRoute().params.id);
const product = computed(() => {
  return products.filter((product) => product.id == id)[0];
});
</script>
<template>
  <div class="mx-auto w-full justify-between gap-4 lg:flex">
    <div class="md:w-[40%]">
      <div class="h-[300px] overflow-hidden rounded-lg">
        <img
          :src="product.url"
          alt=""
          class="h-[300px] object-cover transition-all duration-700 hover:scale-110"
        />
      </div>
    </div>
  </div>
</template>
