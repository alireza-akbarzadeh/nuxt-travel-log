<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate";

const props = defineProps<{
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | "textarea";
}>();

const inputId = `input-${props.name}`;
const isTextarea = props.type === "textarea";
</script>

<template>
  <fieldset class="space-y-1">
    <label :for="inputId" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <Field
      :id="inputId"
      :as="isTextarea ? 'textarea' : 'input'"
      :name="name"
      :type="!isTextarea ? props.type || 'text' : undefined"
      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary border-gray-300"
    />

    <ErrorMessage
      v-slot="{ message }"
      :name="name"
    >
      <p
        aria-live="polite"
        class="text-error"
        role="alert"
      >
        {{ message }}
      </p>
    </ErrorMessage>
  </fieldset>
</template>
