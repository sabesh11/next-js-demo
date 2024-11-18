import mongoose, { models } from "mongoose";

const postSchema=new mongoose.Schema({
    title:String,
    description:String,
    image:String,
})

 const postModal = models.Post || mongoose.model('Post',postSchema)

 export default postModal
