import {  HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import {CardDataSection} from "@/components/features/home/card-data-section";
import { ProfileSection} from "@/components/features/home/profile-section";

export default function HomePage(){
return(
    <>
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-20 right-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[180px]" />
      </div>

      <div className="relative">
        <HomePageBannerSection />
        <CardDataSection />
        <ProfileSection />
      </div>
    </main>
    
    </>
)
}