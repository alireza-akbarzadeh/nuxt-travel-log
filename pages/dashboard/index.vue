<script lang="ts" setup>
const isSidebar = ref(true);

onMounted(() => {
  isSidebar.value = localStorage.getItem("isSidebar") === "true";
});

function toggleSidebar() {
  isSidebar.value = !isSidebar.value;
  localStorage.setItem("isSidebar", isSidebar.value.toString());
}
</script>

<template>
  <aside class="flex-1 flex">
    <div
      :class="{ 'w-64': isSidebar, 'w-16': !isSidebar }"
      class="bg-base-100 transition-all duration-300 border-r dark:border-none border-gray-300/70"
    >
      <div
        :class="{ 'justify-center': !isSidebar, 'justify-end': isSidebar }"
        class="flex pt-2 hover:cursor-pointer hover:bg-base-200"
        @click="toggleSidebar"
      >
        <Icon
          v-if="isSidebar"
          name="tabler:chevron-left"
          size="32"
        />
        <Icon
          v-else
          name="tabler:chevron-right"
          size="32"
        />
      </div>
      <div class="flex flex-col gap-5 pt-5">
        <SidebarButton
          :show-label="isSidebar"
          href="/dashboard"
          icon="tabler:map"
          label="location"
        />
        <SidebarButton
          :show-label="isSidebar"
          href="/dashboard/add-location"
          icon="tabler:circle-plus-filled"
          label="Add location"
        />
        <div class="divider" />
        <SidebarButton
          :show-label="isSidebar"
          href="/sign-out"
          icon="tabler:logout-2"
          label="Sign out"
        />
      </div>
    </div>
    <div class="flex-1" />
  </aside>
</template>
