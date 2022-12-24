<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button type="primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      type="danger"
      @click="logout"
    >
      Logout
    </el-button>
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>

<script lang="ts" setup>
const { $routeNames } = useGlobalProperties()

const router = useRouter()
const { logout } = useAuthStore()
const contactsStore = useContactsStore()

const { getContacts, updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

onMounted(() => {
  getContacts()
})
</script>
