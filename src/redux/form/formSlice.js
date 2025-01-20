// src/store/form/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    module: 'React Mod7',
    username: '',
    email: '',
    password: 'mod7USIP-LEANDRO'  // Aquí va tu nombre
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = { 
        ...state.formData,
        ...action.payload 
      };
    },
    clearFormData: (state) => {
      state.formData = { ...initialState.formData };
    }
  }
});

export const { saveFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;