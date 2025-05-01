<script lang="ts" setup>
const router = useRoute();
const error = router.query.error || "an unknown error occurred";
</script>

<template>
  <div
    class="card bg-base-300 container mt-4 mx-auto min-h-72 text-center fle flex-col items-center justify-center gap-4"
  >
    <div class="alert alert-error text-2xl min-w-1/2 text-center" role="alert">
      <span>Oh no! {{ error }}</span>
    </div>
    <NuxtLink class="btn btn-primary" to="/">
      <Icon name="tabler:arrow-left" size="28" />
      Home
    </NuxtLink>
  </div>
</template>
