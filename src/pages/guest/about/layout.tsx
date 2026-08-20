import {Outlet} from "react-router";
import {Header} from "@/components/common/header";
import {Footer} from "@/components/common/footer";

export default function GuestLayout(){
    return(
        <>
           <Header />
           <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
            <Outlet />
           </main>
           <Footer/>
           </>
    )
}