import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	authProcessing: false,
	isActive: false,
	token: null,
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
			const { user, token } = action.payload;

			state.user = user;
			state.token = token;
			state.userId = null;
			state.isActive = true;
		},
		handleLogout: () => initialState,
	},

	extraReducers: (builder) => {
		builder;
	},
});

export default authSlice.reducer;

export const { handleLogin, handleAuth, handleLogout } = authSlice.actions;
