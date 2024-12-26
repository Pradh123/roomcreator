import { configureStore } from "@reduxjs/toolkit"
import signUpSlice from './signUpSlice'
const store=configureStore({
    reducer:{
        signup:signUpSlice
    }
})

export default store;