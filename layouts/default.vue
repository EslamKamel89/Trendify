<script setup lang="ts">
import { Search } from "lucide-vue-next";

const isDark = useDark();
const searchItem = ref("");
const isLoading = ref(false);
watch(searchItem, () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
onMounted(() => {
  isDark.value = false;
});
</script>
<template>
  <div id="MainLayout" class="w-[100vw]">
    <img
      src="/images/bg.png"
      class="fixed z-[-1] h-[100vh] w-full object-cover"
    />
    <div id="TopMenu" class="hidden w-full border-b bg-white/85 lg:block">
      <ul
        class="mx-auto flex h-10 max-w-4xl items-center justify-end px-2 text-sm font-light text-black"
      >
        <LayoutNavItem><div>Sell on Trendify</div></LayoutNavItem>
        <LayoutNavItem><div>Cookie Preferences</div></LayoutNavItem>
        <LayoutNavItem><div>Help</div></LayoutNavItem>
        <LayoutNavItem><div>Buyer Protection</div></LayoutNavItem>
        <LayoutAuthNavItem />
      </ul>
    </div>
    <div class="flex w-full items-center bg-gray-300/30">
      <div class="mx-auto w-full max-w-4xl">
        <div class="flex w-full justify-between gap-10 py-2">
          <NuxtLink to="/">
            <img src="/images/logo.png" alt="logo" class="w-10" />
          </NuxtLink>
          <div class="relative w-fit max-w-sm items-center">
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
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-4xl">
      <slot />
    </div>
  </div>
</template>
