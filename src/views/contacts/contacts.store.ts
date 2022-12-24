export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Brent S. Betts (Broken Link)',
      description: '4347 Hilltop Street',
      image: 'https://lloremflickr.com/cache/resized/5613_31861376076_ccb6f1895c_q_80_80_nofilter.jpg'
    },
    {
      id: 2,
      name: 'Mary K. Kwiatkowski',
      description: '3626 Gateway Road',
      image: 'https://loremflickr.com/cache/resized/65535_52482515227_0e5cd1ccd7_q_80_80_nofilter.jpg'
    },
    {
      id: 3,
      name: 'Edgar Denisov',
      description: 'ul. Janowicza Edwarda 7',
      image: 'https://loremflickr.com/cache/resized/65535_51788078747_3b0972967b_q_80_80_nofilter.jpg'
    },
    {
      id: 4,
      name: 'Ismail Kazantsev',
      description: 'ul. Leszno 39',
      image: 'https://loremflickr.com/cache/resized/65535_52552903348_288981b690_t_80_80_nofilter.jpg'
    },
    {
      id: 5,
      name: 'Nazar Yusupov',
      description: 'ul. Czarna 140',
      image: 'https://loremflickr.com/cache/resized/65535_52209145403_473db9b7de_q_80_80_nofilter.jpg'
    },
    {
      id: 6,
      name: 'Daria Kirillova',
      description: 'ul. Słowackiego Juliusza 22',
      image: 'https://loremflickr.com/cache/resized/65535_52551195881_287edc4796_q_80_80_nofilter.jpg'
    },
    {
      id: 7,
      name: 'Agnes Kapustina',
      description: 'ul. Malinowa 67',
      image: 'https://loremflickr.com/cache/resized/65535_52540193287_23e9d85da0_q_80_80_nofilter.jpg'
    },
    {
      id: 8,
      name: 'Rustam Vinogradov',
      description: 'ul. Brodzińskiego Kazimierza 104',
      image: 'https://loremflickr.com/cache/resized/65535_52221967454_bd4b0a44d1_t_80_80_nofilter.jpg'
    },
    {
      id: 9,
      name: 'Ian Golovanov',
      description: 'ul. Młyńska 102',
      image: 'https://loremflickr.com/cache/resized/65535_52180198759_e168cab076_q_80_80_nofilter.jpg'
    },
    {
      id: 10,
      name: 'Athanasius Afanasyev',
      description: 'ul. Pod Stokiem 39',
      image: 'https://loremflickr.com/cache/resized/65535_51770849505_2056954238_q_80_80_nofilter.jpg'
    },
    {
      id: 11,
      name: 'Lina Kharitonova (Broken Link)',
      description: 'ul. Morcinka Gustawa 15',
      image: 'https://lloremflickr.com/cache/resized/65535_52219978770_6256f11dc9_q_80_80_nofilter.jpg'
    },
    {
      id: 12,
      name: 'Monica Fyodorova',
      description: 'ul. Okulickiego Leopolda 149',
      image: 'https://loremflickr.com/cache/resized/65535_51789143123_9a6766a5f5_q_80_80_nofilter.jpg'
    },
    {
      id: 13,
      name: 'Nick Matveyev',
      description: 'ul. Na Wzgórzu 128',
      image: 'https://loremflickr.com/cache/resized/65535_51819412787_897bcbc7ee_q_80_80_nofilter.jpg'
    },
    {
      id: 14,
      name: 'Cyrus Baranova',
      description: 'ul. Kapitana Pniaka Karola 111',
      image: 'https://loremflickr.com/cache/resized/65535_52214474104_4d410806c7_q_80_80_nofilter.jpg'
    },
    {
      id: 15,
      name: 'Ignat Izmailov',
      description: 'ul. Kogucia 97',
      image: 'https://loremflickr.com/cache/resized/5218_5430464944_afcd71a1e1_q_80_80_nofilter.jpg'
    },
    {
      id: 16,
      name: 'Agnes Gavrilova',
      description: 'ul. Boduena 10',
      image: 'https://loremflickr.com/cache/resized/65535_52215297981_6ca7bb37e1_q_80_80_nofilter.jpg'
    },
    {
      id: 17,
      name: 'Veronica Yashina',
      description: 'ul. Forteczna 58',
      image: 'https://loremflickr.com/cache/resized/65535_52549243193_0b732fb695_q_80_80_nofilter.jpg'
    },
    {
      id: 18,
      name: 'Myra Afanasyeva',
      description: 'ul. Chodkiewicza Karola 61',
      image: 'https://loremflickr.com/cache/resized/65535_52342652910_6729b8a007_t_80_80_nofilter.jpg'
    },
    {
      id: 19,
      name: 'Kondrat Abramovich',
      description: 'ul. Krótka 12',
      image: 'https://loremflickr.com/cache/resized/65535_52264899193_e12ab28547_q_80_80_nofilter.jpg'
    },
    {
      id: 20,
      name: 'Ilya Ignatyev',
      description: 'ul. Księdza Klimasa Czesława 1',
      image: 'https://loremflickr.com/cache/resized/65535_52209392834_f0325562ca_q_80_80_nofilter.jpg'
    }

  ])

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: IContact) {
    contacts.value.push(contact)

    return contactsService.addContact({ name: contact.name, description: contact.description })
      .then((res) => {
        console.log(res)
      })
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }

    return contactsService.updateContact(contact)
      .then((res) => {
        console.log(res)
      })
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)

    return contactsService.removeContact(contact)
      .then((res) => {
        console.log(res)
      })
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact

  }
})
