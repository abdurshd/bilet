import { UserData } from "@/app/register/page";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
export const register = createAsyncThunk('auth/register', async (userData: UserData, thunkAPI) => {
    console.log(userData)
})

//login user
export const login = createAsyncThunk('auth/login', async (userData: UserData, thunkAPI) => {
    console.log(userData)
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
})

export default authSlice.reducer
