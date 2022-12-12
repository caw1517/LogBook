import { createSlice } from "@reduxjs/toolkit";

/*Redux Slice handling all functions related to the sidebar*/

//Initial state of the sidebar
const initialState = {
    sidebarActive: false,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {

        //Close the sidebar
        closeSidebar: (state) => {
            state.sidebarActive = false;
        },

        //Toggle the sidebar
        toggleSidebar: (state) => {
            state.sidebarActive = !state.sidebarActive;
        }
    },
});

//Export the actions and reducer
export const { closeSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;

