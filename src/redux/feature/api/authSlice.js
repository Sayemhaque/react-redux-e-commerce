import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated:false,
    isLoading:false,
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.isLoading = false
            localStorage.setItem("user",JSON.stringify(action.payload))
        },
        setLoading:(state,action) => {
            console.log(action.payload)
            state.isLoading = action.payload
        },
        setError:(state,action) => {
            console.log(action.payload)
            state.error = action.payload
            state.isLoading = false
        },
        clearError:(state) => {
           state.error = null
        },
        logOut:(state)=> {
            state.user = null,
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = null
            localStorage.removeItem("user")
        }
    }
})



export const {setUser,setLoading,setError,login,logOut,clearError} = authSlice.actions

export default authSlice.reducer