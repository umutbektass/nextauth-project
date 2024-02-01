// src/components/AuthForm.js
'use client'
import React, { useState } from 'react';
import { TextField  , Button, Flex, Box , Text} from '@radix-ui/themes';
import Style from './style.module.css'
const AuthForm = ({ type }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        // İlgili auth işlemlerini burada gerçekleştirin
        const res = await fetch("/api/auth/users",{
            method:"POST",
            body:JSON.stringify({email:username , password:password}),

        }).then((res)=>res.json());
        console.log(res)
       
    };

    return (
        <div className={Style.container}>
            <div>
           <Text> Kayıt Ol</Text>
           <form onSubmit={handleSubmit}>
            <Flex justify={'center'} gap={'3'} direction={'column'} style={{width:'500px'}}>
            <TextField.Input onChange={(e)=>setUsername(e.target.value)} size="2" placeholder="E-mail" />
            <TextField.Input onChange={(e)=>setPassword(e.target.value)} size="2" placeholder="Password" />
            <Button>
            Kayıt Ol
            </Button>
            </Flex>
            </form>
            </div>
           
        </div>
    );
};

export default AuthForm;
