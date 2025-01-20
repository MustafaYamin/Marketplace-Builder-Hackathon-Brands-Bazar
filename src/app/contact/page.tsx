import Image from "next/image";

export default function Contact() {
  return (
    <div>


      <div className="flex flex-col mt-5 md:flex-row gap-11 px-10 items-center justify-center">
        <div className="flex flex-col gap-6">
          <p className="text-[#252B42]text-sm lg:text-base font-bold">
            CONTACT US
          </p>
          <p className=" lg:w-[350px]  text-[#252B42] font-bold text-[40px] lg:text-[50px] leading-[40px] lg:leading-[80px]">
            Get in touch today!
          </p>
          <p className="text-[#737373] text-[15px] lg:text-[20px] leading-[30px] w-[]370px">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="font-bold text-[18px] lg:text-[24px] leading-[32px] text-[#252B42]">
            Phone : +451 215 215{" "}
          </p>
          <p className="font-bold text-[18px] lg:text-[24px] leading-[32px] text-[#252B42]">
            Fax : +451 215 215
          </p>
          <div className="flex items-center gap-7 lh:gap-10">
            <Image
              src="/logos_twitter.png"
              alt="logos"
              width={30}
              height={24}
            />
            <Image
              src="/logos_facebook-black.png"
              alt="logos"
              width={30}
              height={24}
            />
            <Image src="/black-insta.png" alt="logos" width={30} height={24} />
            <Image
              src="/logos_linkedin-black.png"
              alt="logos"
              width={30}
              height={24}
            />
          </div>
        </div>
        <div>
          <Image
            src="/technology 1.png"
            alt="gero-bg"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="w-[100vw] h-auto py-6 flex flex-col items-center justify-center ">
        <p className="font-bold text-[14px] leading-[24px] text-[#252B42]">
          VISIT OUR OFFICE
        </p>
        <p className="w-[350px] md:w-[500px] font-bold text-[#252B42] text-[30px] md:text-[40px] leading-[50px] text-center">
          We help small businesses with big ideas
        </p>

        <div className="flex items-center justify-center flex-col lg:mt-11 lg:flex-row ">




          <div className="w-[328px] flex flex-col items-center justify-center gap-4 h-[400px] ">
            <Image src="/blue-phone.png" alt="img " width={72} height={72} />

            <p className="font-bold text-sm text-[#252B42]">georgia.young@example.com</p>
            <p className="font-bold text-sm text-[#252B42]">georgia.young@ple.com</p>
            <p className="font-bold text-base text-[#252B42]">Get Support</p>

            <button className="w-[180px] h-[54px] text-[#23A6F0] font-bold text-sm rounded-full border-2 border-[#23A6F0]">Submit Request</button>
          </div>



          
          <div className="w-[328px] flex bg-[#252B42] flex-col items-center justify-center gap-4 h-[400px] ">
            <Image src="/location.png" alt=" img" width={72} height={72} />

            <p className="font-bold text-sm text-white">georgia.young@example.com</p>
            <p className="font-bold text-sm text-white">georgia.young@ple.com</p>
            <p className="font-bold text-base text-white">Get Support</p>

            <button className="w-[180px] h-[54px] text-[#23A6F0] font-bold text-sm rounded-full border-2 border-[#23A6F0]">Submit Request</button>
          </div>




          
          <div className="w-[328px] flex flex-col items-center justify-center gap-4 h-[400px] ">
            <Image src="/blue-mail.png" alt="img " width={72} height={72} />

            <p className="font-bold text-sm text-[#252B42]">georgia.young@example.com</p>
            <p className="font-bold text-sm text-[#252B42]">georgia.young@ple.com</p>
            <p className="font-bold text-base text-[#252B42]">Get Support</p>

            <button className="w-[180px] h-[54px] text-[#23A6F0] font-bold text-sm rounded-full border-2 border-[#23A6F0]">Submit Request</button>
          </div>




        </div>
      </div>



<div className="flex flex-col w-[100vw] py-10 justify-center gap-5 items-center">
    <Image src="/Arrow 2.png" alt="arrow" width={72} height={21} />
    <p className="text-base font-bold text-[#252B42]">WE Can&apos;t WAIT TO MEET YOU</p>
    <p className="text-[#252B42] text-[58px] leading-[80px] font-bold">Let&apos;s Talk</p>
    <button className="w-[189px] h-[52px] text-white bg-[#23A6F0] font-bold text-sm rounded-md ">
          Try it free now
        </button>
</div>

    </div>
  );
}
