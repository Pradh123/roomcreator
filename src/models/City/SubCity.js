import mongoose from "mongoose";

const SubcitySchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"City"
    }
},{timestamps:true});

const SubCity=mongoose.models.SubCity||mongoose.model("SubCity",SubcitySchema);

export default SubCity;