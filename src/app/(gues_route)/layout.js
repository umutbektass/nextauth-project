import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
import Navbar from "../components/Navbar";
export default async function GuestLayout({ children }) {
    const session = await getServerSession(authOption)
    console.log("profile session",session)
    if(session) redirect("/profile")
  
  return (
  
   <div>
     <Theme>
    
          {children}
          </Theme>
          </div>
       
     
   
  );
}
