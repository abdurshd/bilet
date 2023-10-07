import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
    user: null,
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

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    console.log(user)
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
})

export default authSlice.reducer
