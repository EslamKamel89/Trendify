<script setup lang="ts">
import { randomImages } from "~/utils/fakeData";
const id = Number(useRoute().params.id);

const product = computed(() => {
  return products.filter((product) => product.id == id)[0];
});
const selectedImage = ref<string>(product.value.url);
const addToCart = () => {
  isInCart.value = !isInCart.value;
};
const isInCart = ref(false);
</script>
<template>
  <div
    class="mx-auto flex w-full flex-col justify-between space-y-4 space-x-4 lg:flex-row"
  >
    <div class="space-y-4 lg:w-[40%]">
      <div class="flex h-[300px] justify-center overflow-hidden">
        <img
          :src="selectedImage"
          alt=""
          class="h-[300px] rounded-lg object-cover shadow transition-all duration-700 hover:scale-110"
        />
      </div>
      <div class="flex flex-row space-x-2">
        <div v-for="image in randomImages" :key="image" class="h-24">
          <img
            :src="image"
            class="h-24 object-cover transition-all duration-700 hover:scale-x-125"
            alt=""
            @mouseenter="selectedImage = image"
          />
        </div>
      </div>
    </div>
    <div class="lg:w-[60%]">
      <div
        class="mx-auto flex max-w-sm flex-col items-center space-y-2 rounded-lg px-4 py-2 shadow-lg lg:items-start"
      >
        <div class="text-center font-semibold lg:text-start">
          {{ product.title }}
        </div>
        <div class="text-center lg:text-start">{{ product.description }}</div>
        <div class="relative -top-1.5 text-xs font-semibold text-red-400">
          Extra 5% off
        </div>
        <div
          class="flex flex-col items-center space-x-2 text-sm lg:items-start"
        >
          <div class="flex space-x-2">
            <div class="flex items-center space-x-1">
              <Icon
                v-for="i in 5"
                :key="i"
                name="lucide:star"
                class="text-amber-600"
              />
            </div>
            <span>4.7</span>
          </div>
          <div>5213 Reviews 1000+ Orders</div>
        </div>
        <Badge variant="default" class="hover: bg-green-600 hover:bg-green-800"
          >Free Shipping</Badge
        >
        <Button
          @click="addToCart"
          :disabled="isInCart"
          class="w-full text-center"
          >{{ isInCart ? "In Cart" : "Add To Cart" }}</Button
        >
      </div>
    </div>
  </div>
</template>
