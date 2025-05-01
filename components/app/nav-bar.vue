<script setup lang="ts">
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink tp="/" class="btn btn-ghost text-xl">
        Travel log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <a class="btn btn-accent">
        Sign In With Github <icon name="tabler:brand-github" size="24" />
      </a>
    </div>
  </div>
</template>
