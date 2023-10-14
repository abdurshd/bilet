import { UserData } from "@/app/register/page";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

type InitialState = {
    user: null | string,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
}
const initialState: InitialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
} 

//register user
export const register = createAsyncThunk('auth/register', async (user: UserData, thunkAPI) => {
try {
    return await authService.register(user)
} catch (error) {
    const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
}
})

//login user
export const login = createAsyncThunk('auth/login', async (userData: UserData, thunkAPI) => {
    console.log(userData)
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
             state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    },
})

export default authSlice.reducer
