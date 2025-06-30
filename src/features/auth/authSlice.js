import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	authProcessing: false,
	isActive: false,
	user: null,
	userId: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		handleLogin: (state, action) => {
			state.userId = action.payload;
		},
		handleAuth: (state, action) => {
			state.user = action.payload;
			state.isActive = true;
			state.userId = null;
		},
		handleLogout: () => initialState,
	},

	extraReducers: (builder) => {
		builder;
	},
});

export default authSlice.reducer;

export const { handleLogin, handleAuth, handleLogout } = authSlice.actions;
