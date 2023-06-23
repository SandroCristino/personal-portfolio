import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDownloaded: false,
}

const dataSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setIsDownloaded: (state) => {
            state.isDownloaded = true
        },
    },
})

export const {
    setIsDownloaded
} = dataSlice.actions

export default dataSlice.reducer

