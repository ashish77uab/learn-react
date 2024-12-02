import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterReducer'
import { productReducer } from './productReducer'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer,
    }
})