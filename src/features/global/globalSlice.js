import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activePageTitle: '',
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		handleActivePageTitle: (state, action) => {
			state.activePageTitle = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder;
	},
});

export default globalSlice.reducer;

export const { handleActivePageTitle } = globalSlice.actions;
