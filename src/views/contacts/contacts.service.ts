class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  addContact (payload: IContactWOId) {
    return useHttp.post('rest/v1/contacts', payload)
  }

  updateContact (payload: IContact) {
    return useHttp.patch(`rest/v1/contacts?id=eq.${payload.id}`, payload)
  }

  removeContact (payload: IContact) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${payload.id}`)
  }
}

export const contactsService = new ContactsService()
