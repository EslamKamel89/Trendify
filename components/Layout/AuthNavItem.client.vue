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
        class="absolute top-[20px] -left-[100px] z-40 w-[220px] rounded-lg border-x border-b bg-white !text-black shadow-lg"
      >
        <div class="relative flex flex-col items-center space-y-4 py-4">
          <div class="px-3">Welcome to Trendify</div>
          <NuxtLink to="/" class="">
            <Button variant="default" size="sm" class=""
              >Login / Register</Button
            >
          </NuxtLink>
          <Separator class="" />
          <NuxtLink to="/" class="">
            <Button variant="outline" size="sm" class="">My Orders</Button>
          </NuxtLink>
          <NuxtLink to="/" class="">
            <Button variant="ghost" size="sm" class="">Sign out</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </LayoutNavItem>
</template>
