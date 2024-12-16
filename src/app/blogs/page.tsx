import Footer from "../components/footer";
import OurTeam from "../components/props/ourteam";
import SubNav from "../components/subNav";
import Image from "next/image";
export default function Blog() {
  return (
    <div>
      <SubNav />

      <div className="w-[100vw] h-auto py-5 flex flex-col items-center justify-center">
        <div className="font-bold text-[12px] md:text-base text-[#737373]">WHAT WE DO</div>
        <div className="font-bold md:text-[48px] text-[25px] lg:text-[58px] leading-[80px] text-[#252B42] ">Innovation tailored for you</div>
        <div className="flex items-center gap-3">
          <div className="text-[#252B42] font-bold text-[14px] leading-6">
            Home
          </div>
          <div>
            <Image
              alt="hoem to shop"
              src="/home-shop.png"
              width={8}
              height={15}
            />
          </div>
          <div className="text-[#BDBDBD] font-bold text-[14px] leading-6">
            Team
          </div>
        </div>
      </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-[100vw] gap-2">
            <div>
                <Image src="/blog1.png" alt="image" width={700} height={500} />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Image src="/blog2.png" alt="Image" width={360} height={260}/>
                <Image src="/blog3.png" alt="Image" width={360} height={260}/>
                <Image src="/blog4.png" alt="Image" width={360} height={260}/>
                <Image src="/blog5.png" alt="Image" width={360} height={260}/>
            </div>
        </div>



<div className="flex flex-col items-center justify-center py-3">
<p className="font-bold text-[40px] leadin-[50px] text-[#252B42] ">Meet Our Team</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
    <OurTeam src="/media6.png"/>
    <OurTeam src="/media (1).png"/>
    <OurTeam src="/media (2).png"/>
    <OurTeam src="/media.png"/>
    <OurTeam src="/media (3).png"/>
    <OurTeam src="/team-1-user-1.jpg"/>
    <OurTeam src="/team-1-user-2.jpg"/>
    <OurTeam src="/team-1-user-4.jpg"/>
    <OurTeam src="/media (4).png"/>
</div>
</div>







<div className="flex flex-col w-[100vw] h-auto py-11 items-center justify-center gap-7">
    <h1 className="text-[#252B42] text-[40px] leading-[50px] font-bold">Start your 14 days free trial</h1>
    <p className="w-[300px]  md:w-[406px] h-[40px]  text-sm text-center text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor 
    do met sent. RELIT official consequent.</p>

    <button className="w-[189px] h-[52px] text-white bg-[#23A6F0] font-bold text-sm rounded-md ">Try it free now</button>

    <div className="flex gap-5">
        <Image src="/Vector (1).png" alt="socials" width={38} height={24}/>
        <Image src="/logos_facebook.png" alt="socials" width={30} height={24}/>
        <Image src="/instagram.png" alt="socials" width={30} height={24}/>
        <Image src="/logos_linkedin-icon.png" alt="socials" width={30} height={24}/>
         </div>
</div>



<Footer/>

    </div>
  );
}
