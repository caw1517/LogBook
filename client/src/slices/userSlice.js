import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Dependencies
import axios from "axios";
import jwtDecode from "jwt-decode";

export const getUserId = createAsyncThunk(
"user/getUserId",
async (token, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:5126/api/Auth/tokenFromId",
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        return response.data;
    } catch (error) {
        return error;
    }
});

//Login the user
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkApi) => {
        if (user.userName === '' || user.password === '') {
            throw thunkApi.rejectWithValue("Please enter your username and password");
        } else {

            try {
                const response = await axios.post("http://localhost:5126/api/Auth/login", {
                    userName: user.userName,
                    password: user.password,
                })
                //Store token in local storage
                localStorage.setItem("token", response.data);

                return response.data;
            } catch (error) {
                return thunkApi.rejectWithValue(error.response.data);
            }
        }
    }
);

export const verifyAuth = createAsyncThunk(
    "user/isAuthenticated",
    async (thunkApi) => {
        const localToken = localStorage.getItem("token");
        if (localToken) {
            const decodedToken = jwtDecode(localToken);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem("token");
                return thunkApi.rejectWithValue("Token expired");
            } else {
                return localToken;
            }
        } else {
            return thunkApi.rejectWithValue("No token found");
        }
    }
);

//Init State
const initialState = {
    token: null,
    status: "idle",
    error: null,
    isAuthed: false,
    userId: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //Login User
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
            state.status = "succeeded";
            state.isAuthed = true;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })

        //Is Authenticated
        builder.addCase(verifyAuth.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(verifyAuth.fulfilled, (state, action) => {
            state.token = action.payload;
            state.status = "succeeded";
            state.isAuthed = true;
        })
        builder.addCase(verifyAuth.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })

        //Get User Id
        builder.addCase(getUserId.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(getUserId.fulfilled, (state, action) => {
            state.userId = action.payload;
            state.status = "succeeded";
        })
        builder.addCase(getUserId.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;