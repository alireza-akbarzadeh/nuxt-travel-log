<script lang="ts" setup>
const { user, signIn, loading } = useAuthStore();
</script>

<template>
  <div v-if="!loading && user" class="dropdown dropdown-end">
    <div
      class="btn m-1"
      role="button"
      tabindex="0"
    >
      <div class="avatar">
        <div v-if="user.image" class="size-7 rounded-full">
          <img :alt="user.name" :src="user.image">
        </div>
      </div>
      <span class="pt-1 pl-1">
        {{ user.name }}
      </span>
    </div>
    <ul class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm" tabindex="0">
      <li>
        <NuxtLink class="flex items-center gap-2" to="/sign-out">
          <Icon name="tabler:logout" size="24" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button
    v-else
    :disabled="loading"
    class="btn btn-accent"
    @click="signIn"
  >
    Sign In With Github <icon name="tabler:brand-github" size="24" />
    <span v-if="loading" class="loading loading-spinner loading-md" />
  </button>
</template>
