import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUserApi,
  logInApi,
  logOutApi,
  registerApi,
} from 'authApi/authApi.js';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await logInApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOutApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = await getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const data = getCurrentUserApi(persistedToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
