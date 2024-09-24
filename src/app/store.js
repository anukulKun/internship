import { configureStore } from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoReducer.js'

export const store = configureStore({
    reducer: todoReducer
})