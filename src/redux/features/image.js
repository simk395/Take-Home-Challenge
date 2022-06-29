import { createSlice } from '@reduxjs/toolkit'

// try to make state only an array

const imagesSlice = createSlice({
    name: "images",
    initialState:{
        urls: [],
        display: [],
        selected: []
    },
    reducers:{
        load: (state, action) => {
            state.urls = [...action.payload];
            state.display = [...action.payload];
        },
        select: (state, action) =>{
            state.selected = [...state.selected, action.payload];
        },
        deselect: (state, action) => {
            state.selected = state.selected.filter(item => item.url !== action.payload.url)
        },
        selectAll: (state) => {
            state.selected = [...state.urls];
        },
        deselectAll: (state) =>{
            state.selected = [];
        },
        search: (state, action) => {
            state.display = [...state.urls];
            state.display = state.display.filter(image => {
                const input = action.payload.toLowerCase()
                const title = image.title.toLowerCase();
                return title.includes(input);
            });
        }
    }
})

export const { load, select, deselect, selectAll, deselectAll, search } = imagesSlice.actions;
export default imagesSlice.reducer;
