<template>
  <div class="rounded-lg bg-white shadow relative flex flex-col">
    <slot name="title">
      <h3 v-if="title" class="font-semibold px-6 pt-6 pb-4">{{ title }}</h3>
    </slot>

    <div
      class="flex-grow px-6"
      :class="[
        { 'pt-6': !title && !$slots.title},
        !!$slots.footer ? 'pb-2' : 'pb-6'
      ]"
    >
      <slot />
    </div>

    <div class="shrink-0">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
