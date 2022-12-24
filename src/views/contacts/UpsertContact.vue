<template>
  <div class="flex justify-center">
    <Card :title="cardTitle" class="w-[350px]">
      <div class="space-y-4">
        <AppInput v-model.trim="contactForm.name" placeholder="Name" />

        <AppInput v-model.trim="contactForm.description" placeholder="Description" />

        <!-- <AppInput v-model.trim="contactForm.image" placeholder="Image Link" /> -->
      </div>

      <template #footer>
        <div class="px-6 pb-6 mt-2 flex gap-3">
          <AppButton class="flex-auto" @click="$router.back">
            Cancel
          </AppButton>

          <AppButton v-if="currentContact" class="flex-auto" @click="onDelete">
            Delete
          </AppButton>

          <AppButton class="flex-auto" :disabled="!isFormValid" @click="onSave">
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>

            Save
          </AppButton>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const { $routeNames } = useGlobalProperties()
const { contacts, addContact, updateContact, deleteContact } = useContactsStore()

const currentContact = computed(() => contacts.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.length + 1,
    name: '',
    description: ''

  })

const isFormValid = computed(() => {
  return Object.values(contactForm).every(c => !!c)
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
  }
  router.push({ name: $routeNames.contacts })
}
</script>
