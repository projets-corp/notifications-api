import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import intlReducer from './intlReducer';
import themeReducer from './themeReducer';

const reducer = combineReducers({
  theme: themeReducer,
  intl: intlReducer,
});

export default configureStore({
  reducer,
})