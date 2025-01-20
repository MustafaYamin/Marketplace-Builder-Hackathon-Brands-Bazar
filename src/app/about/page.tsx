import Image from "next/image";
import OurTeam from "../components/props/ourteam";
import Parteners from "../components/partners";

export default function About() {
  return (
    <div>


      <div className=" flex mt-4 md:w-[80vw] lg:w-[90vw] flex-col md:flex-row items-center justify-center">
        <div className="flex relative left md:left-60  flex-col gap-5">
          <p className="w-36 leading-6 md:text-base text-[14px] font-bold text-[#252B42]">
            About Company
          </p>
          <p className="font-bold text-[40px] md:text-[58px] leading-[80px] text-[#252B42]">
            About Us
          </p>
          <p className="w-[200px]  md:w-[376px] text-[15px] md:text-[20px] leading-7 text-[#737373]">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="w-[195px] h-[52px] text-white bg-blue-400 rounded-md">
            Get Quote Now
          </button>
        </div>
        <Image
          className="hidden md:block md:w-[100vw] "
          src="/about-hero.png"
          alt="hero-bg"
          width={1500}
          height={200}
        />
      </div>
      <Image
        className="md:hidden "
        src="/none.png"
        alt="hero-bg"
        width={2000}
        height={200}
      />

      <div className="grid grid-cols-1 gap-6 items-center justify-center pl-2 md:pl-10 mt-5 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="text-red-500 text-[12px] md:text-[14px] leading-[20px]">
            Problems trying
          </div>
          <div className="text-[#252B42] w-[340px] md:w-[360px] font-bold text-[20px] md:text-[24px] leading-8">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </div>
        </div>

        <div className="w-80  md:w-[540px] text-12px md:text-sm text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </div>
      </div>

      <div className="flex items-center my-32 justify-center w-[100vw] ">
        <div className="grid gap-28 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center">
          <div>
            <div className="font-bold text-[#252B42] leading-[80px] text-[58px] ">
              15K
            </div>
            <div className="font-bold text-base text-[#737373] ">
              Happy Customer
            </div>
          </div>

          <div>
            <div className="font-bold text-[#252B42] leading-[80px] text-[58px] ">
              150K
            </div>
            <div className="font-bold text-base text-[#737373] ">
              Monthly Visitors
            </div>
          </div>

          <div>
            <div className="font-bold text-[#252B42] leading-[80px] text-[58px] ">
              15
            </div>
            <div className="font-bold text-base text-[#737373] ">
              Countries Worldwide
            </div>
          </div>

          <div>
            <div className="font-bold text-[#252B42] leading-[80px] text-[58px] ">
              100+
            </div>
            <div className="font-bold text-base text-[#737373] ">
              Top Parteners
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-[100vw] h-auto py-32">
        <div>
          <Image
            className="md:w-[600px] xl:w-[900px]"
            src="/Video card.png"
            alt="video"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[100vw] h-auto py-5">
        <div className="font-bold text-[#252B42] text-[40px] leading-[50px]">
          Meet Our Team
        </div>
        <div className=" w-64  md:w-[450px] text-sm text-center text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </div>
      </div>
      <div className="grid md:ml-12  gap-10 xl:gap-0 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <OurTeam src="/team-1-user-1.jpg" />
        <OurTeam src="/team-1-user-2.jpg" />
        <OurTeam src="/media.png" />
      </div>

      <div className="w-[100vw] gap-2 bg-[#FAFAFA] mt-11 py-6 flex flex-col items-center justify-center">
        <div className="md:w-[500px]  font-bold text-[#252B42] md:text-[40px] text-[30px] text-center leading-[50px]">
          Big Companies Are Here
        </div>
        <div className="md:w-[500px] text-[#737373] text-sm text-center">
          {" "}
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </div>

        <Parteners />
      </div>

      <div className="flex ">
        <div className="bg-[#2A7CC7] flex justify-between  w-[100vw] h-auto">
          <div className=" text-white clex flex-col items-center justify-center gap-6">
            <div className="md:pt-24 md:pb-5  lg:pt-56">
              <div className="text-base font-bold       md:ml-16     mt-6">
                WORK WITH US
              </div>
              <div className="font-bold mt-6 text-[40px]       md:ml-16   leading-[50px] ">
                Now Let&apos;s grow Yours
              </div>
              <div className="text-sm w-[340px] md:w-[400px]      md:ml-16     mt-6">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th{" "}
              </div>

              <button className=" w-24 md:w-32  h-12 md:h-14 border-2       md:ml-16    mt-6 border-white rounded-md">
                Button
              </button>
            </div>
          </div>
          <Image
            className="hidden lg:block"
            src="/pro-cover-5.png"
            alt="pro cover"
            width={600}
            height={500}
          />
        </div>
      </div>

  
    </div>
  );
}
