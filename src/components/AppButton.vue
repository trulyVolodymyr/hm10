<template>
  <button
    :disabled="disabled"
    :class="[
      'bg-blue-500 hover:bg-blue-700 disabled:bg-gray-medium disabled:cursor-not-allowed',
      'text-white text-sm font-medium rounded p-2 inline-flex items-center justify-center'
    ]"
  >
    <div class="mr-2">
      <slot name="icon" />
    </div>

    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  disabled?: boolean
}>()
</script>
