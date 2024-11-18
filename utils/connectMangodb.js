import mongoose from "mongoose";

// for connecting mangoodb
const connectMangodb= async ()=>mongoose.connect(process.env.MANGO_URL,);

export default connectMangodb;