// // src/components/AuthForm.js
// 'use client'
// import React, { useState } from 'react';
// import { TextField  , Button, Flex, Box , Text} from '@radix-ui/themes';
// import Style from '../sign-up/style.module.css'
// import { useRouter } from 'next/navigation';

import SignInForm from "./SignInForm";

// import { signIn } from 'next-auth/react';
export default function  SignIn ({ type })  {
    // const [email, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const router = useRouter()
    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //         const res = await signIn("credentials",{
    //             email:email,
    //             password:password,
    //             redirect:false
    //         })
    //         if(res?.error) return console.log(res.error)
    //         router.push("/profile")
       
    // };

    return (
        <div >
            {/* <div>
           <Text> Giriş Yap</Text>
           <form onSubmit={handleSubmit}>
            <Flex justify={'center'} gap={'3'} direction={'column'} style={{width:'500px'}}>
            <TextField.Input onChange={(e)=>setUsername(e.target.value)} size="2" placeholder="E-mail" />
            <TextField.Input onChange={(e)=>setPassword(e.target.value)} size="2" placeholder="Password" />
            <Button>
            Giriş Yap
            </Button>
            </Flex>
            </form>
            </div> */}
            <SignInForm/>
           
        </div>
    );
};

