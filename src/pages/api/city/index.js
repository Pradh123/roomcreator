import City from "@/models/City/City";
import DbConnection from "@/utils/db";

const cityApi=async (req,res)=>{
    DbConnection();
    if(req.method==="POST"){
        try {
            const {localLocation}=req.body;
            const data=await City.create({name:localLocation});
            if(!data){
            return res.status(300).json({message:"something went wrong"})
            }
            return res.status(201).json({message:"City added successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
    else if(req.method==="DELETE"){

    }
    else{
        try {
            const data=await City.find({});
            if(!data && data.length===0){
            return res.status(400).json({message:"not found"})
            }
            return res.status(201).json({message:"found",data})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
   
}
export default cityApi