import {configureStore} from "@reduxjs/toolkit";
import {AppsSlice} from "./appSlice.tsx";

export const store = configureStore({
    reducer: {
        apps: AppsSlice.reducer
    }
})