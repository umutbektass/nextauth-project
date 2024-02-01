import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
export default async function AdminLayout({children}){
    const session= await getServerSession(authOption)
    const user = session?.user || undefined;
    const isAdmin = user?.role=="admin";
    if(!isAdmin) redirect("/auth/sign-in")
    return <div>
        
   
        <Theme>
        {children}
        </Theme>
    </div>
}