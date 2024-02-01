import { Schema, models,model } from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String , enum:["admin" , "user"] , default:"user"
    }
});

userSchema.pre("save", async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
     
      next()
    } catch (error) {
      console.error(error);
    }
  });
  
  
userSchema.methods.comparePassword = async function(password){
   try {
    return await bcrypt.compare(password,this.password)
   } catch (error) {
    throw error;
   }
}
const UserModel = models.User || model ("User",userSchema)

export default UserModel;