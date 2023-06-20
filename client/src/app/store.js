import { configureStore } from '@reduxjs/toolkit';
import propertySlice from '../features/properties/propertySlice';
import authSlice from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    properties:propertySlice,
    auth:authSlice
  },
});
