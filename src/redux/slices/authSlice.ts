import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: ''
}

const authSlice = createSlice(
    {
        name: 'login',
        initialState: initialState,
        reducers: {
            logIn : (state, action) => {
                state.token = action.payload;
            },
            logOut: (state) => {
                state.token = "";
            }
        }
    }
)

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;