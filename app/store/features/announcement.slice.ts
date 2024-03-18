import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = []

export const announcementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers: {
        addNew: (state, action) => {
            return [...state, action.payload]
        }
    }

})


export const { addNew } = announcementSlice.actions

export default announcementSlice.reducer