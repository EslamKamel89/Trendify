<script setup lang="ts"></script>
<template>
  <NuxtLink to="/shoppingcart" class="relative">
    <div class="rounded-full px-2 py-1 shadow-lg hover:scale-105">
      <Icon name="lucide:shopping-cart" size="20" />
      <div
        class="bg-primary absolute -top-3 -right-3 rounded-full px-2 py-1 text-xs text-white"
      >
        1
      </div>
    </div>
  </NuxtLink>
</template>
