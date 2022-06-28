import { createSlice } from '@reduxjs/toolkit'

// try to make state only an array
const imagesSlice = createSlice({
    name: "images",
    initialState:{
        images: []
    },
    reducers:{
        load: (state = [], action) => {
            state.images = [...action.payload];
        },
        select: (state, action) =>{
            state.push(action.payload)
        },
        deselect: (state, action) => {
            state.push({
                image: action.payload
            })
        }
    }
})

export const {select, deselect, load} = imagesSlice.actions;
export default imagesSlice.reducer;
