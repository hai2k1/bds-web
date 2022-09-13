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
        checkAuth(state, action){
            getUserMe().then((res)=>{
                if(res.status == 404){
                    state.authState = false;
                    clearToken();
                }
                else {
                    state.authState = true;
                    state.user = res.data.user;
                }
            })
        }
    },
});

export const {setAuthState,checkAuth} = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectUser = (state: AppState) => state.auth.user;
export default authSlice.reducer;
