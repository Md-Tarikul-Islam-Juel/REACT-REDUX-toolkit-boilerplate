import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/counterReducer/counterReducers';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
