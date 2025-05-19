import mongoose from "mongoose";
async function DBconnect() {
    try {
        await mongoose.connect("mongodb+srv://rakib:99880@cluster0.kaond.mongodb.net/newbase");
        console.log("database connected");
        
    } catch (error) {
        console.log("database connection error"+ error);
        
    }
}
export default DBconnect;