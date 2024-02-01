import mongoose from "mongoose";

const url = process.env.DB_URI
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
  };
const startDb  = async()=>{
  const connect =   await mongoose.connect(url,mongooseOptions)
  
}

export default startDb;