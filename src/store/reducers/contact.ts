import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContactClass from '../../models/ContactClass'

import * as enums from '../../utils/enums/LabelEnum'

type ContactsState = {
  items: ContactClass[]
}

const initialState: ContactsState = {
  items: [
    {
      contactName: 'João',
      contactNumber: 3994966897,
      contactEmail: 'joaoth@exemplo.com',
      label: enums.LabelEnum.FAMILY.toString(),
      favorite: true,
      id: 1
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((c) =>
        c.id === action.payload ? { ...c, favorite: !c.favorite } : c
      )
    },
    createContact: (state, action: PayloadAction<Omit<ContactClass, 'id'>>) => {
      const lastContact = state.items[state.items.length - 1]

      const newContact = {
        ...action.payload,
        id: lastContact ? lastContact.id + 1 : 1
      }
      state.items.push(newContact)
    }
  }
})

export const { deleteContact, editContact, toggleFavorite, createContact } =
  contactsSlice.actions

export default contactsSlice.reducer
