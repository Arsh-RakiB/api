const mongoose = require("mongoose")

const DB_connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(" DB connected ");
        
    } catch (error) {
        console.log("mongoDB connnection issue",error);
        
    }
}
module.exports=DB_connect;