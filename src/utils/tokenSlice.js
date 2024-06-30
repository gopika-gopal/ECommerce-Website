import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
    name: 'token',
    initialState: localStorage.getItem('token') || null,
    reducers: {
        addToken: (state, action) => {
            return action.payload;
        },
        removeToken: (state, action) => {
            localStorage.removeItem('token')
            return null;
        }
    }
})

export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;