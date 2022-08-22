import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactApi,
  removeContactsApi,
} from 'authApi/authApi';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'addContacts',
  async (contact, rejectWithValue) => {
    try {
      const newContact = await addContactApi(contact);

      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeContact = createAsyncThunk(
  'deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactsApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
