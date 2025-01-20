// src/redux/form/formReducer.js
import { SAVE_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
  formData: {
    module: 'React Mod7',
    username: '',
    email: '',
    password: 'mod7USIP-LEANDRO'  // Reemplaza WILLIAM con tu nombre
  }
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM_DATA:
      return {
        ...state,
        formData: { 
          ...state.formData, 
          ...action.payload 
        }
      };
    case CLEAR_FORM_DATA:
      return {
        ...state,
        formData: { ...initialState.formData }
      };
    default:
      return state;
  }
};

export default formReducer;