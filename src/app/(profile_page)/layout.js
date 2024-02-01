import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes';
export default async function UserLayout({ children }) {
    const session = await getServerSession(authOption)
    console.log("profile session",session)
    if(!session?.user) redirect("/auth/sign-in")
  
  return (
    <div>
        <Theme>
        {children}
        </Theme>
          </div>
  );
}
