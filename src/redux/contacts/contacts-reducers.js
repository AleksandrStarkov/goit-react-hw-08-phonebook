import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, filterContact } from './contacts-actions';
import { combineReducers } from 'redux';

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
