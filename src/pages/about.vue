<script setup lang="ts">
const router = useRouter();

function goBack() {
  router.push("/");
}
</script>

<template>
  <h1 text-xl>
    About
  </h1>
  <button bg-green-600 p="x-4 y-1" rounded text-white @click="goBack">
    Back
  </button>
</template>
