<script lang="ts" setup>
const { signIn, loading } = useAuthStore();
</script>

<template>
  <button
    :disabled="loading"
    class="btn btn-accent"
    @click="signIn"
  >
    Sign In With Github <icon name="tabler:brand-github" size="24" />
    <span v-if="loading" class="loading loading-spinner loading-md" />
  </button>
</template>
