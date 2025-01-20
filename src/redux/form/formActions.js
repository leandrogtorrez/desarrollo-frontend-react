// src/redux/form/formActions.js
import { SAVE_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

export const saveFormData = (data) => ({
  type: SAVE_FORM_DATA,
  payload: data
});

export const clearFormData = () => ({
  type: CLEAR_FORM_DATA
});