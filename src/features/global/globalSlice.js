import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder;
	},
});

export default globalSlice.reducer;

// export const {} = globalSlice.actions;
