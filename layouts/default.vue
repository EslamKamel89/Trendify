<script setup lang="ts"></script>
<template>
  <div id="MainLayout" class="w-[100vw]">
    <img
      src="/images/bg.png"
      class="fixed z-[-1] h-[100vh] w-full object-cover"
    />
    <div id="TopMenu" class="hidden w-full border-b lg:block">
      <ul
        class="flex h-10 items-center justify-end px-2 text-xs font-light text-gray-600"
      ></ul>
    </div>
    <slot />
  </div>
</template>
