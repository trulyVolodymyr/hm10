<template>
  <template v-if="visible">
    <img :src="contact.image" :alt="contact.name">
  </template>
  <template
    v-else
  >
    <div
      ref="trigger"
    />
  </template>
</template>

<script lang="ts" setup>
const visible = ref(false)
const trigger = ref<Element>()

defineProps<{
  contact: IContact
}>()

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 0
}

const observer = new IntersectionObserver(callBack, options)

function callBack (entries: any, observer: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      visible.value = true
      observer.unobserve(entry.target)
    }
  })
}

/// помилка свариться, а бразуер працює ¯\_(ツ)_/¯
onMounted(() => {
  observer.observe(trigger.value)
})

</script>
