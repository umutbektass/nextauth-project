import { Container, Box, DecorativeBox } from "@radix-ui/themes";
import Style from './style.module.css'

// import { useSession , signOut } from "next-auth/react";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
  function Navbar() {
  
    // const session = useSession()
    // console.log("session",session);
    // const isAuth = session.status ==="authenticated";
    return (
        <nav>
        <div className={Style.container}>
        <p>Home</p>
        <ProfileMenu/>
        {/* {
            isAuth ?  <Link href={''} onClick={()=>signOut()}>Çıkış Yap </Link> :  <p>Giriş Yap</p> 
        } */}
        </div>
        </nav>
    ); 
}

export default Navbar;