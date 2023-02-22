import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import reducer from '../reducers/reducer';

export const store = configureStore({
	reducer: { keyAndToken: reducer },
	devTools: true,
});
