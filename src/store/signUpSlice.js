import { createSlice } from "@reduxjs/toolkit"

const signUpSlice=createSlice({
   name:'signup',
   initialState:{
    togle:false
   },
   reducers:{
    formOpen:(state)=>{
        state.togle=true;
    },
    formClose:(state)=>{
        state.togle=false;
    }
   }
})

const {formOpen,formClose} =signUpSlice.actions;

export default signUpSlice.reducer;