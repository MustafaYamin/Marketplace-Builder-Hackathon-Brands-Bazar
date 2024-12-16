import Image from "next/image";
import SubNav from "../components/subNav";
import Footer from "../components/footer";
import Parteners from "../components/partners";
import { Switch } from "@/components/ui/switch";

export default function Pricing() {
  return (
    <div>
      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center w-[100vw] h-auto  p-16 ">
        <div className="w-[100vw] bg-white py-3 md:w-[90vw] lg:[80vw] ">
          <SubNav />
          <div className="flex gap-6 flex-col items-center justify-center py-5">
            <p className=" font-bold text-base  text-[#737373]"> PRICING</p>
            <p className=" text-[#252B42] text-[58px] leading-[80px] font-bold text-center ">
              {" "}
              Simple Pricing
            </p>
            <div className="flex  items-center gap-3">
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
                Pricing
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100vw] flex flex-col items-center justify-center gap-4 h-auto py-7 bg-transparent">
          <p className=" text-[40px] leading-[50px] font-bold text-[#252B42]">
            Pricing
          </p>
          <p className="text-[#737373] w-[310px] md:w-[460px] text-sm text-center">
            {" "}
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="text-[#252B42] text-base font-bold ">Monthly</p>
            <Switch />
            <p className="text-[#252B42] text-base font-bold "> Yearly</p>
            <div className="w-28 bg-[#B2E3FF] h-auto py-2 rounded-3xl text-[#23A6F0] font-bold text-base text-center">
              {" "}
              Save 25%
            </div>
          </div>
        </div>

        <div className=" grid w-[100vw] ml-16 md:ml-0  xl:pl-24 lg:gap-1 gap-y-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
          <div className="h-[664px]  border-[1px] border-[#23A6F0] rounded-md   lg:mt-8  w-[335px] flex flex-col text-center py-6 bg-[#FFFFFF]">
            <div className="font-bold text-[#252B42] text-xl leading-[32px] ">
              FREE
            </div>
            <div className="font-bold text-base text-[#737373] w-[165px] self-center">
              Organize across all apps by hand
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div className="text-[#23A6F0] font-bold text-[40px] leading-[50px] ">
                0
              </div>
              <div className="flex flex-col gap-0">
                <p className="text-[#23A6F0] text-start  font-bold text-[30px] leading-[50px] ">
                  $
                </p>
                <p className="text-[#8EC2F2] text-sm  font-semibold">
                  Per Month
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-[#252B42] text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className="flex  items-center justify-center gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-[#252B42] text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className="flex items-center justify-center  gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-[#252B42] text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className=" flex items-center  justify-center relative -left-6 gap-4">
                <Image src="/gray-tick.png" alt="tick" width={32} height={32} />
                <p className="font-bold text-[#252B42] text-sm">
                  1GB Cloud Storage
                </p>
              </div>
              <div className=" flex items-center justify-center gap-4">
                <Image src="/gray-tick.png" alt="tick" width={32} height={32} />
                <p className="font-bold w-[175px] text-[#252B42] text-sm">
                  Email and community support
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-16">
              <button className="bg-[#23A6F0] text-sm text-white font-bold rounded-md w-[240px] h-[52px] ">
                {" "}
                Try for free
              </button>
            </div>
          </div>
          <div className="h-[664px]  border-[1px] border-[#23A6F0] rounded-md  w-[335px] flex flex-col text-center py-6 bg-[#252B42]">
            <div className="font-bold text-white text-xl leading-[32px] ">
              STANDARD
            </div>
            <div className="font-bold text-base text-white w-[165px] self-center">
              Organize across all apps by hand
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div className="text-[#23A6F0] font-bold text-[40px] leading-[50px] ">
                9.99
              </div>
              <div className="flex flex-col gap-0">
                <p className="text-[#23A6F0] text-start  font-bold text-[30px] leading-[50px] ">
                  $
                </p>
                <p className="text-[#8EC2F2] text-sm  font-semibold">
                  Per Month
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-white text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className="flex  items-center justify-center gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-white text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className="flex items-center justify-center  gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-white text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className=" flex items-center  justify-center relative -left-6 gap-4">
                <Image src="/gray-tick.png" alt="tick" width={32} height={32} />
                <p className="font-bold text-white text-sm">
                  1GB Cloud Storage
                </p>
              </div>
              <div className=" flex items-center justify-center gap-4">
                <Image src="/gray-tick.png" alt="tick" width={32} height={32} />
                <p className="font-bold w-[175px] text-white text-sm">
                  Email and community support
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-16">
              <button className="bg-[#23A6F0] text-sm text-white font-bold rounded-md w-[240px] h-[52px] ">
                {" "}
                Try for free
              </button>
            </div>
          </div>
          <div className="h-[664px]  border-[1px] border-[#23A6F0] rounded-md   lg:mt-8  w-[335px] flex flex-col text-center py-6 bg-[#FFFFFF]">
            <div className="font-bold text-[#252B42] text-xl leading-[32px] ">
              PREMIUM
            </div>
            <div className="font-bold text-base text-[#737373] w-[165px] self-center">
              Organize across all apps by hand
            </div>
            <div className="flex gap-2 items-center justify-center">
              <div className="text-[#23A6F0] font-bold text-[40px] leading-[50px] ">
                19.99
              </div>
              <div className="flex flex-col gap-0">
                <p className="text-[#23A6F0] text-start  font-bold text-[30px] leading-[50px] ">
                  $
                </p>
                <p className="text-[#8EC2F2] text-sm  font-semibold">
                  Per Month
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-[#252B42] text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className="flex  items-center justify-center gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-[#252B42] text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className="flex items-center justify-center  gap-4">
                <Image
                  src="/green-tick.png"
                  alt="tick"
                  width={32}
                  height={32}
                />
                <p className="font-bold text-[#252B42] text-sm">
                  Unlimited product updates
                </p>
              </div>
              <div className=" flex items-center  justify-center relative -left-6 gap-4">
                <Image src="/gray-tick.png" alt="tick" width={32} height={32} />
                <p className="font-bold text-[#252B42] text-sm">
                  1GB Cloud Storage
                </p>
              </div>
              <div className=" flex items-center justify-center gap-4">
                <Image src="/gray-tick.png" alt="tick" width={32} height={32} />
                <p className="font-bold w-[175px] text-[#252B42] text-sm">
                  Email and community support
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-16">
              <button className="bg-[#23A6F0] text-sm text-white font-bold rounded-md w-[240px] h-[52px] ">
                {" "}
                Try for free
              </button>
            </div>
          </div>{" "}
        </div>

        <div className="w-[100vw] relative bg-[#FAFAFA] lg:-top-96 h-auto py-11 lg:pt-11  lg:pb-28  flex flex-col items-center justify-center">
          <p className="text-[#252B42] text-xl text-center">
            Trusted by Over 4000 Big Companies
          </p>
          <Parteners />
        </div>
      </div>

      <div className="w-[100vw] relative lg:-top-60 bg-white flex flex-col items-center justify-center gap-4 h-auto py-7 bg-transparent">
        <p className=" text-[40px] leading-[50px] font-bold text-[#252B42]">
          Pricing FAQs
        </p>
        <p className="text-[#737373] w-[310px] md:w-[460px] text-sm text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>

        <div className="flex w-[100vw] h-auto py-8">
          <div className=" lg:pl-16 xl:pl-48 w-[100vw]   grid  grid-cols-1 items-center justify-center gap-11 md:grid-cols-2">
            <div className="flex gap-2">
              <Image
                className="w-4 h-5 mt-1 "
                src="/blue-arr.png"
                alt=""
                width={8.5}
                height={16}
              />
              <div>
                <p className="text-base pb-2 font-bold text-[#252B42] w-[300px]">
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-sm  w-[300px] md:w-[390px] lg:w-[450px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                className="w-4 h-5 mt-1 "
                src="/blue-arr.png"
                alt=""
                width={8.5}
                height={16}
              />
              <div>
                <p className="text-base pb-2 font-bold text-[#252B42] w-[300px]">
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-sm  w-[300px] md:w-[390px] lg:w-[450px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                className="w-4 h-5 mt-1 "
                src="/blue-arr.png"
                alt=""
                width={8.5}
                height={16}
              />
              <div>
                <p className="text-base pb-2 font-bold text-[#252B42] w-[300px]">
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-sm  w-[300px] md:w-[390px] lg:w-[450px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                className="w-4 h-5 mt-1 "
                src="/blue-arr.png"
                alt=""
                width={8.5}
                height={16}
              />
              <div>
                <p className="text-base pb-2 font-bold text-[#252B42] w-[300px]">
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-sm  w-[300px] md:w-[390px]  lg:w-[450px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                className="w-4 h-5 mt-1 "
                src="/blue-arr.png"
                alt=""
                width={8.5}
                height={16}
              />
              <div>
                <p className="text-base pb-2 font-bold text-[#252B42] w-[300px]">
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-sm  w-[300px] md:w-[390px]  lg:w-[450px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                className="w-4 h-5 mt-1 "
                src="/blue-arr.png"
                alt=""
                width={8.5}
                height={16}
              />
              <div>
                <p className="text-base pb-2 font-bold text-[#252B42] w-[300px]">
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-sm  w-[300px] md:w-[390px]  lg:w-[450px] text-[#737373]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100vw] h-auto py-11 items-center justify-center gap-7">
        <h1 className="text-[#252B42] text-center text-[40px] leading-[50px] font-bold">
          Start your 14 days free trial
        </h1>
        <p className="w-[300px]  md:w-[406px] h-[40px]  text-sm text-center text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        <button className="w-[189px] h-[52px] text-white bg-[#23A6F0] font-bold text-sm rounded-md ">
          Try it free now
        </button>

        <div className="flex gap-5">
          <Image src="/Vector (1).png" alt="socials" width={38} height={24} />
          <Image
            src="/logos_facebook.png"
            alt="socials"
            width={30}
            height={24}
          />
          <Image src="/instagram.png" alt="socials" width={30} height={24} />
          <Image
            src="/logos_linkedin-icon.png"
            alt="socials"
            width={30}
            height={24}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
