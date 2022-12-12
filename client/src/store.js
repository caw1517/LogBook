import { configureStore} from "@reduxjs/toolkit";

//Reducers
import sidebarReducer from "./slices/sidebarSlice";
import aircraftReducer from "./slices/aircraftSlice";
import userReducer from "./slices/userSlice";


export const store = configureStore({
    //Set the reducers
    reducer: {
        sidebar: sidebarReducer,
        aircraft: aircraftReducer,
        user: userReducer,
    },
});
