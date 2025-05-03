import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: JSON.parse(localStorage.getItem('loggedIn')) || false,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.loggedIn = true;
            // localStorage.setItem('loggedIn', JSON.stringify(action.payload));
            sessionStorage.setItem('token', action.payload);
        },
    }    
})

// Action creators are generated for each case reducer function
export const { setLogin } = authSlice.actions

export default authSlice.reducer