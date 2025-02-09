// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/formSlice'; // Asegúrate de que la ruta es correcta

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
