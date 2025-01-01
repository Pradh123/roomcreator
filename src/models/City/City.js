import mongoose from "mongoose";
import "./SubCity";
const citySchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    subCity:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCity"
    }]
},{timestamps:true});

const City=mongoose.models.City||mongoose.model("City",citySchema);

export default City;