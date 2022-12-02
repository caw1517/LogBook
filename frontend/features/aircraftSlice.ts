import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import {counterSlice} from "./counter/counterSlice";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

const initialState = {
    status: 'idle',
    aircraft: [],
}

export const fetchAircraft = createAsyncThunk('aircraft/fetchAircraft', async () => {
    const response = await axios.get('http://localhost:5126/api/Aircraft');
    return response.data;
})

export const aircraftSlice = createSlice({
    name: 'aircraft',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAircraft.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAircraft.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const loadedAircraft = action.payload;
            state.aircraft = loadedAircraft;
        });
        builder.addCase(fetchAircraft.rejected, (state, action) => {
           state.status = 'failed';
           state.aircraft = [];
        });
    },
})

export const selectAllAircraft = (state: any) => state.aircraft.aircraft;
export const selectAircraftStatus = (state: any) => state.aircraft.status;
export const {  } = aircraftSlice.actions;
export default aircraftSlice.reducer;