<script setup lang="ts">
import { isDark, toggleDark } from "~/composables";
const router = useRouter();

function goAbout() {
  router.push("/about");
}
</script>

<template>
  <h1 text-xl>
    index
  </h1>
  <button @click="toggleDark()">
    <i v-if="isDark" class="i-carbon-moon" />
    <i v-else class="i-carbon-sun" />
  </button>
  <button bg-green-600 p="x-4 y-1" rounded text-white @click="goAbout">
    About
  </button>
</template>
