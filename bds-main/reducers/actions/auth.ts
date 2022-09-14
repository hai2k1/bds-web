import {createSlice} from "@reduxjs/toolkit";
import {AppState} from "../store";
import {clearToken, getUserMe} from "../../api/auth";

// Type for our state
export interface AuthState {
    authState: boolean;
    user: object;
}

// Initial state
const initialState: AuthState = {
    authState: false,
    user: {}
};

// Actual Slice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action) {
            state.user = action.payload.user;
            state.authState = true;
        },
        setAuth(state, action){
            state.authState = action.payload;
        },
        setUser(state, action){
            state.user = action.payload;
        }
    },
});

export const {setAuthState,setAuth,setUser} = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectUser = (state: AppState) => state.auth.user;
export default authSlice.reducer;
