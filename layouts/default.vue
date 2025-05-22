<script setup lang="ts">
const isDark = useDark();

onMounted(() => {
  isDark.value = false;
});
const { width } = useWindowSize();
</script>
<template>
  <div id="MainLayout" class="flex min-h-screen flex-col">
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
        <div class="flex w-full justify-between gap-10 px-4 py-2">
          <SharedLogo />
          <div class="hidden lg:flex lg:items-center lg:space-x-2">
            <LayoutSearchItems />
            <LayoutCartCounter />
          </div>
          <template v-if="width < 1024">
            <Drawer direction="left" class="">
              <DrawerTrigger>
                <Icon
                  name="lucide:menu"
                  class="block hover:scale-105 lg:!hidden"
                  size="20"
                />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription
                    >This action cannot be undone.</DrawerDescription
                  >
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline"> Cancel </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </template>
        </div>
      </div>
    </div>
    <SharedLoading v-if="false" />
    <div class="mx-auto h-full w-full max-w-4xl flex-1 overflow-x-hidden py-4">
      <slot />
    </div>
    <div class="max-w-screen min-w-0">
      <LayoutFooter />
    </div>
  </div>
</template>
