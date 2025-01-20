// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  }
});

export default store;