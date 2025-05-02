<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content min-h-96 text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        <AuthButton v-if="!authStore.user" />
        <NuxtLink
          v-else
          class="btn btn-primary"
          to="/dashboard"
        >
          Start Logging
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
