import { NextResponse } from "next/server"
import startDb from "../../../../../lib/db"
import UserModel from "../../../../../models/userModel"

export const POST = async (req)=>{
    const body  = await req.json()
    await startDb()
    // const oldUser = await UserModel.findOne({email:body.email})
    // if(oldUser) return NextResponse.json({error:"e-posta zaten kullanımda"},{status:402})
    const user = await UserModel.create({...body});
return NextResponse.json({user:{
    id:user._id.toString(),
    email:user.email,
    password:user.password,
    role:user.role
}})
}