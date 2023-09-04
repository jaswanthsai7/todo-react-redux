import {configureStore} from '@reduxjs/toolkit' 
import todoReducer from '../features/todo/todoSlice'

// to mention all reducers
export  const store= configureStore({
    reducer:todoReducer,
}) 