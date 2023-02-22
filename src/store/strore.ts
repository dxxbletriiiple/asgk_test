import { createSlice } from '@reduxjs/toolkit';

const keyState = {
	key: ''
};

const keySlice = createSlice({
	name: 'key',
	keyState,
	reducers: {
		addKey(state, payload) {
			state.key = payload;
		},
	},
});

export const { addKey } = keySlice.actions;

export keySlice.reducer;


const tokenState = {
	token: ''
};

const tokenSlice = createSlice({
	name: 'token',
	tokenState: tokenState,
	reducers: {
		addToken: (state, action) => {
			state.token = action.payload);
		},
	},
});

export const { addTodo, removeTodo } = tokenSlice.actions;

export  tokenSlice.reducer;
