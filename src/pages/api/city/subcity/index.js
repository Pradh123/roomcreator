import City from "@/models/City/City";
import SubCity from "@/models/City/SubCity";
import DbConnection from "@/utils/db";
const subcityApi=async (req,res)=>{
    DbConnection();
    if(req.method==="POST"){
        try {
            const {local,name}=req.body;
            const data=await SubCity.create({name,city:local});
            if(!data){
            return res.status(300).json({message:"something went wrong"})
            }
            await City.findOneAndUpdate({_id:local},{$push:{subCity:data?._id}});
            return res.status(201).json({message:"subCity updated successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
    else if (req.method === "DELETE") {
        try {
            const { id } = req.query;
    
            if (!id) {
                return res.status(400).json({ message: "Id is required !!!" });
            }
    
            const subcitydata = await SubCity.findById(id).populate("city");
    
            if (!subcitydata) {
                return res.status(404).json({ message: "Sub city not found" });
            }
    
            const updatedSubcities = subcitydata.city.subCity.filter(
                (item) => item.toString() !== id
            );
    
            await City.findByIdAndUpdate(subcitydata.city._id, {
                $set: { subCity: updatedSubcities },
            });
    
            const deletedData = await SubCity.findByIdAndDelete(id);
    
            if (!deletedData) {
                return res.status(500).json({ message: "Failed to delete sub city" });
            }
    
            return res.status(200).json({ message: "Sub city successfully deleted" });
        } catch (error) {
            console.error("Error deleting sub city:", error);
            return res.status(500).json({ message: "Internal Server Error", error });
        }
    }
    
    else if(req.method==="PUT"){
        try {
            const {local,name}=req.body;
            const {id}=req.query;
            if(!id){
                return res.status(301).json({message:"Id is required !!!"}) 
            }
            const data=await SubCity.findOneAndUpdate({_id:id},{$set:{name,city:local}});
            if(!data){
            return res.status(300).json({message:"something went wrong"})
            }
            return res.status(201).json({message:"subCity updated successfully"})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
    else{
        try {
            const {id}=req.query;
            const data=await SubCity.find({city:id});
            if(!data || data.length===0){
            return res.status(400).json({message:"not found"})
            }
            return res.status(200).json({message:"found",data})
        } catch (error) {
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
   
}
export default subcityApi