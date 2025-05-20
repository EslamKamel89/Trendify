<script setup lang="ts"></script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <LayoutNavItem>
        <Icon name="lucide:user-round" size="17" />
        Account
        <Icon name="lucide:chevron-down" size="12" class="ml-5" />
      </LayoutNavItem>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="bg-white/85">
      <DropdownMenuLabel>
        <div class="px-3">Welcome to Trendify</div>
      </DropdownMenuLabel>
      <DropdownMenuItem>
        <NuxtLink to="/" class="">
          <button>Login / Register</button>
        </NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <NuxtLink to="/" class="">
          <button>My Orders</button>
        </NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NuxtLink to="/" class="">
          <button>Sign out</button>
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
