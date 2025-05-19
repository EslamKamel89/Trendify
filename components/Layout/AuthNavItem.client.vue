<script setup lang="ts">
const isMenuVisible = ref(false);
</script>
<template>
  <LayoutNavItem
    @mouseenter="isMenuVisible = true"
    @mouseleave="isMenuVisible = false"
    class="relative cursor-pointer"
    :class="{ 'rounded shadow': isMenuVisible }"
  >
    <div>
      <Icon name="lucide:user-round" size="17" />
      Account
      <Icon name="lucide:chevron-down" size="12" class="ml-5" />
      <div
        v-if="isMenuVisible"
        class="absolute top-[38px] -left-[100px] z-40 w-[220px] border-x border-b bg-white !text-black"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        repudiandae eius fuga expedita at assumenda culpa dolore praesentium
        ducimus vel.
      </div>
    </div>
  </LayoutNavItem>
</template>
