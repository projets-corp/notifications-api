import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const reducer = combineReducers({
  theme: themeReducer
});

export default configureStore({
  reducer,
})