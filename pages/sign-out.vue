<script lang="ts" setup>
const auth = useAuthStore();

onMounted(async () => {
  await auth.signOut();
});
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto items-center justify-center flex flex-col">
    <span class="loading loading-spinner loading-xl" />
  </div>
</template>
