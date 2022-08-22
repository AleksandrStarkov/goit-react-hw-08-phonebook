import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, removeContact, getContacts } from './contactsOperation';
import { filterContact } from './contactsActions';

const itemsReduser = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const isLoadingReduser = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const errorReduser = createReducer(null, {
  [getContacts.rejected]: setError,
  [getContacts.pending]: () => null,

  [addContact.rejected]: setError,
  [addContact.pending]: () => null,

  [removeContact.rejected]: setError,
  [removeContact.pending]: () => null,
});

const contactsReducers = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
  isLoading: isLoadingReduser,
  error: errorReduser,
});
export default contactsReducers;
