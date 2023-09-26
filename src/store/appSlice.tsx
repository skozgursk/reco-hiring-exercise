import {createSlice} from "@reduxjs/toolkit";

export interface App {
    name: string;
    category: string;
    connectors: string;
}

interface AppsState {
    apps: App[] | null;
}

const initialState: AppsState = {
    apps: []
}

export const AppsSlice = createSlice({
    name: 'apps',
    initialState,
    reducers: {}
});

