<script setup>
const submitNewsletter = () => {
  // Handle newsletter subscription logic here
  alert("Thank you for subscribing!");
};
</script>
<template>
  <footer class="bg-gray-100 text-gray-800">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4"
    >
      <!-- Brand Column -->
      <div class="col-span-1">
        <h2 class="mb-4 text-xl font-semibold">Trendify</h2>
        <p class="text-sm">
          Your go-to store for the latest trends in fashion, lifestyle, and
          more.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="col-span-1">
        <h3 class="mb-4 text-lg font-medium">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <NuxtLink to="/" class="hover:underline">
              <Button variant="ghost">Home</Button>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="hover:underline">
              <Button variant="ghost">Products</Button>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:underline">
              <Button variant="ghost">About Us</Button>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:underline">
              <Button variant="ghost">Contact</Button>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="col-span-1">
        <h3 class="mb-4 text-lg font-medium">Contact</h3>
        <ul class="space-y-2 text-sm">
          <li>Email: support@trendify.com</li>
          <li>Phone: +1 (234) 567-8901</li>
        </ul>

        <!-- Social Media Icons -->
        <div class="mt-4 flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            class="transition hover:text-blue-600"
          >
            <Button variant="ghost">
              <Icon name="lucide:facebook" />
            </Button>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="transition hover:text-pink-600"
          >
            <Button variant="ghost">
              <Icon name="lucide:instagram" />
            </Button>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="transition hover:text-blue-400"
          >
            <Button variant="ghost">
              <Icon name="lucide:twitter" />
            </Button>
          </a>
        </div>
      </div>

      <!-- Newsletter / CTA (Optional) -->
      <div class="col-span-1">
        <h3 class="mb-4 text-lg font-medium">Stay Updated</h3>
        <p class="mb-2 text-sm">Subscribe to our newsletter.</p>
        <form
          @submit.prevent="submitNewsletter"
          class="flex flex-col space-y-2"
        >
          <input
            type="email"
            placeholder="Your email"
            required
            class="rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            class="rounded bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-gray-200 py-4 text-center text-sm text-gray-600">
      &copy; {{ new Date().getFullYear() }} Trendify. All rights reserved.
    </div>
  </footer>
</template>
