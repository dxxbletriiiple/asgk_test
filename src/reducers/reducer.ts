import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const keyAndTokenSlice = createSlice({
	name: 'key',
	initialState: {
		key: '',
		token: '',
	},
	reducers: {
		addKey: (state, action: PayloadAction<string>) => {
			state.key = action.payload;
		},
		addToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
});

const { actions, reducer } = keyAndTokenSlice;
export default reducer;
export const { addKey, addToken } = actions;
