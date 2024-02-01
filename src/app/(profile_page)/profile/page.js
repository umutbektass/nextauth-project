
// import { useSession , signOut } from "next-auth/react";
import Link from "next/link";
  
 function Page() {
    // const session = useSession()
    // console.log("session",session);
    // const isAuth = session.status ==="authenticated";
    return (
        <div>
           
            Profile Page
            {/* {isAuth ? "LogOut":"Giriş yap"} */}
            {/* <button href={''} onClick={()=>signOut()}>Çıkış yap</button> */}
        </div>
    );
}

export default Page;