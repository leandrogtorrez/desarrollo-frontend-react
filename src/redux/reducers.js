
// src/redux/reducers.js
import { combineReducers } from 'redux';
import formReducer from './form/formReducer';
// importa tus otros reducers existentes
import defaultReducer from './default/defaultReducer';
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
});

export default rootReducer;