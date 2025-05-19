import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name : {type:String},
    pass : {type:String}
})
export const User = mongoose.model("User", userSchema)
