const { default: mongoose } = require("mongoose")

const DbConnection=async ()=>{
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI);
        return db;
    } catch (error) {
        console.log("database is not connected")
    }
}
export default DbConnection;