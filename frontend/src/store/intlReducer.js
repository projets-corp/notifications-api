import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    locale: 'fr',
};

export const themeSlice = createSlice({
    name: 'intl',
    initialState,
    reducers: {
        changeLocale: (state, action) => ({
            locale: action.payload.locale,
        }),
    },
});

export const { changeLocale } = themeSlice.actions;

export default themeSlice.reducer;
