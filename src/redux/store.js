import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './features/image'

export const store = configureStore({
  reducer: {
    images: imageReducer
  }
})

export default store;

