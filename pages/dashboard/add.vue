<script lang="ts" setup>
import { InsertLocation } from "~/lib/db/schema";

const { handleSubmit, errors } = useForm({ validationSchema: toTypedSchema(InsertLocation) });

const onSubmit = handleSubmit(() => {

});
</script>

<template>
  <div class="mx-auto container max-w-md p-4">
    <div class="my-4">
      <h1 class="text-lg">
        Add Location
      </h1>
      <p class="text-sm">
        A location is a place you have traveled or will travel to. It can be a city, country, state or point of
        interest. You can add specific times you visited this location after adding it.
      </p>
    </div>
    <form class="space-y-4" @submit.prevent="onSubmit">
      <AppFormField
        :error="errors.name"
        label="Name"
        name="name"
      />

      <AppFormField
        :error="errors.description"
        label="Description"
        name="description"
        type="textarea"
      />

      <AppFormField
        :error="errors.lat"
        label="Latitude"
        name="lat"
        type="number"
      />

      <AppFormField
        :error="errors.long"
        label="Longitude"
        name="long"
        type="number"
      />

      <div class="flex justify-end items-center gap-2">
        <button class="btn btn-outline" type="button">
          <Icon name="tabler:arrow-left" size="24" />
          Cancel
        </button>
        <button class="btn btn-primary" type="submit">
          Add
          <Icon name="tabler:circle-plus-filled" size="24" />
        </button>
      </div>
    </form>
  </div>
</template>
