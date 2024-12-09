import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="w-[100vw] items-center flex justify-around border-b-2 border-b-gray-300 flex-wrap h-auto py-10 bg-transparent">
        <div className="text-2xl font-bold">Bandage</div>
        <Image src="/social media.png" alt="socials" width={120} height={20} />
      </div>
      <div className="h-auto flex flex-col lg:flex-row lg:pl-5 pl-4 justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:grid-cols-4 flex-wrap items-center justify-center ">
          <div className="gap-3 flex flex-col h-[170px] w-[148px] ">
            <h1 className="text-[#252B42] text-[16px] font-bold leading-[24px]">
              Company Info
            </h1>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              About Us
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Carrier
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              We are hiring
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Blog
            </p>
          </div>

          <div className="gap-3 flex flex-col h-[170px] w-[148px] ">
            <h1 className="text-[#252B42] text-[16px] font-bold leading-[24px]">
              Legal
            </h1>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              About Us
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Carrier
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              We are hiring
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Blog
            </p>
          </div>

          <div className="gap-3 flex flex-col h-[170px] w-[148px] ">
            <h1 className="text-[#252B42] text-[16px] font-bold leading-[24px]">
              Features
            </h1>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              BusinessMarketing
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              User Analytic
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Live Chat
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Unlimited Support
            </p>
          </div>

          <div className="gap-3 flex flex-col h-[170px] w-[148px] ">
            <h1 className="text-[#252B42] text-[16px] font-bold leading-[24px]">
              Resources
            </h1>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              IOS & Android
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              watch a Demo
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              Customers
            </p>
            <p className="font-bold text-[14px] leading-[24px] text-[#737373]">
              API
            </p>
          </div>
        </div>
        <div className="gap-5 flex flex-col">
          <p className="text-[#252B42] text-[16px] font-bold leading-[24px]">
            Get In Touch
          </p>
          <div className="flex">
            <input
              type="text"
              className="h-[50px] pl-3 w-[200px] bg-[#F9F9F9]"
              placeholder="Your Email"
            />
            <button className="h-[50px]  pl-3 w-[160px] text-white bg-[#23A6F0]">
              Subscribe
            </button>
          </div>
          <p className="text-[12px] leading-[28px] text-[#737373]">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
        <div className="text-[#737373] text-wrap py-11 font-bold md:pl-44 bg-[#FAFAFA] w-[100vw] ">
        Made With Love By Finland All Right Reserved 
        </div>
    </div>
  );
}
