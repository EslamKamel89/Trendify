<script setup lang="ts">
const isDark = useDark();
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
      <div class="flex w-full items-center bg-gray-300/30">
        <div class="mx-auto max-w-4xl">
          <div
            class="flex w-full justify-between gap-10 lg:justify-start"
          ></div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-4xl">
      <slot />
    </div>
  </div>
</template>
