import NextAuth, { NextAuthOptions } from "next-auth";


import startDb from "../../../../../lib/db";
import UserModel from "../../../../../models/userModel";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOption={
    session:{
        strategy:"jwt",

    },
    providers:[
        CredentialsProvider({
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                const {email,password} = credentials 
                await startDb();
                const user = await UserModel.findOne({email});
                if(!user) throw Error("E-mail ve şifre doğru değil.")
                // const passwordMatch = await user.password(password);
            const passwordCheck = password ==user.password
         
                if(!passwordCheck) throw Error("Yanlış şifre.");
                console.log("user bilgileri",user)
                const data={
                    email:email,
                    password:password
                }
            //     const user4 = await fetch('https://apierp.sercair.com:3000/api/v1/webDealer/login',{
            //    method:'POST',body:JSON.stringify(data), headers:{'Content-Type': 'application/json'}
             
            //     })
            //     console.log("user4",user4);
                return{
                    email:user.email,
                    role:user.role,
                    id:user._id
                   
                }
                 
            },
            
          
        }),
        
    ],
    
    callbacks:{
        jwt(params){
            console.log("jwt params",params)
            if(params.user?.role){
                params.token.role=params.user.role;
                params.token.id=params.user.id;
            }
            return params.token;
        },
        session({session,token}){
            if(session.user){
                session.user.id = token.id;
                console.log(session)
                session.user.role = token.role;

            }
            return session;

        }
    }
}

const authHandler = NextAuth(authOption);

export const GET = authHandler;
export const POST = authHandler;

