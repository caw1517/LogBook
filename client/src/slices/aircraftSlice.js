import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Fetch Aircraft
export const fetchAircraftByUser = createAsyncThunk(
    "aircraft/fetchAircraftByUser",
    async (userId, thunkApi) => {
        const response = await axios.get(`http://localhost:5126/api/Aircraft/user/${userId}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    })

export const deleteAircraft = createAsyncThunk(
    "aircraft/deleteAircraft",
    async (aircraftId, thunkApi) => {
        const response = await axios.delete(`http://localhost:5126/api/Aircraft/${aircraftId}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    });

//Add Aircraft
export const addNewAircraft = createAsyncThunk(
    "aircraft/addAircraft",
    async (aircraft, thunkApi) => {
        if(aircraft.serialNumber === '' || aircraft.aircraftType === '') {
            throw thunkApi.rejectWithValue("Please enter a serial number and aircraft type");
            console.log("Please enter a serial number and aircraft type");
        } else {
            try {
                console.log("Aircraft: ", aircraft);
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
    }
)

const initialState = {
    aircraft: [],
    status: "idle",
    error: null,
    addAircraftActive: false,
    editAircraftActive: false,
}

const aircraftSlice = createSlice({
    name: "aircraft",
    initialState,
    reducers: {
        toggleAddAircraft: (state) => {
            state.addAircraftActive = !state.addAircraftActive;
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

export const { toggleAddAircraft } = aircraftSlice.actions;
export default aircraftSlice.reducer;