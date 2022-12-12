import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Fetch Aircraft by User ID
export const fetchAircraftByUser = createAsyncThunk(
    "aircraft/fetchAircraftByUser",
    async (userId, thunkApi) => {
        //Send GET request to the backend to fetch aircraft by user ID
        const response = await axios.get(`http://localhost:5126/api/Aircraft/user/${userId}`, {
            headers: {
                //Set the authorization header to the token
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        //Return the aircraft data
        return response.data;
    })


//Delete Aircraft
export const deleteAircraft = createAsyncThunk(
    "aircraft/deleteAircraft",
    async (aircraftId, thunkApi) => {
        //Send DELETE request to the backend to delete the aircraft
        const response = await axios.delete(`http://localhost:5126/api/Aircraft/${aircraftId}`, {
            headers: {
                //Set the authorization header to the token
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        //Return success message
        return response.data;
    });

//Add Aircraft
export const addNewAircraft = createAsyncThunk(
    "aircraft/addAircraft",
    async (aircraft, thunkApi) => {
        try {
            await axios.post("http://localhost:5126/api/Aircraft", {
                serialNumber: aircraft.serialNumber,
                aircraftType: aircraft.aircraftType,
                userId: aircraft.userId
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            return aircraft;
        } catch (error) {
            console.log("Error: ", error);
            throw thunkApi.rejectWithValue(error.response.data);
        }
    }
)

const initialState = {
    aircraft: [],
    status: "idle",
    error: null,
    addAircraftActive: false,
    editAircraftActive: false,
    addAircraftError: null,
}

const aircraftSlice = createSlice({
    name: "aircraft",
    initialState,
    reducers: {
        toggleAddAircraft: (state) => {
            state.addAircraftActive = !state.addAircraftActive;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setAircraftError: (state, action) => {
            state.addAircraftError = action.payload;
        }
    },
    extraReducers: (builder) => {
        //Fetch Aircraft
        builder.addCase(fetchAircraftByUser.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(fetchAircraftByUser.fulfilled, (state, action) => {
            state.aircraft = action.payload;
            state.status = "succeeded";
        })
        builder.addCase(fetchAircraftByUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })

        //Add Aircraft
        builder.addCase(addNewAircraft.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(addNewAircraft.fulfilled, (state, action) => {
            state.aircraft.push(action.payload);
            state.status = "succeeded";
            state.addAircaftActive = false;
        })
        builder.addCase(addNewAircraft.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const { toggleAddAircraft, setAircraftError, setStatus } = aircraftSlice.actions;
export default aircraftSlice.reducer;