<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-full"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
defineProps<{
  placeholder?: string
  modelValue?: string
}>()

defineEmits(['update:modelValue'])
</script>
