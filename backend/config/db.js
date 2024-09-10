import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://tuandangminh372004:0788778027AbcD@clusterfwb.64pgc.mongodb.net/FUJI').then(()=>console.log("DB Connected"));
}
