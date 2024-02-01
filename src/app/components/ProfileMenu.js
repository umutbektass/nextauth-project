'use client'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
function ProfileMenu() {
    const session = useSession()
    console.log("session", session);
    const isAuth = session.status === "authenticated";
    if (isAuth)
        return (
            <div>
               
                {isAuth ? 

                <Link href={''} onClick={() => signOut()}><p>{session?.data?.user?.email}</p> Çıkış Yap </Link> 
                
                : <p>Giriş Yap</p>
                }
            </div>
        );
    return (
        <div>
               <p> Login</p>
               
           
        </div>
    )
}

export default ProfileMenu;