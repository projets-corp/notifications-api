import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    mode: "light",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchMode: (state) => ({
            mode: state.mode === "light" ? "dark" : "light"
        }),
    },
})

export const { switchMode } = themeSlice.actions

export default themeSlice.reducer