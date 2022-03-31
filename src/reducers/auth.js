import { createSlice } from "@reduxjs/toolkit";

const initialState={

    isLoggedIn: false
}

const auth= createSlice(
    {

        name:"authSlice",
        initialState,
        reducers: {
            login(state){state.isLoggedIn=true},
            logout(state){state.isLoggedIn=false}
        }
    }
);


export const authActions= auth.actions;
export default auth.reducer;