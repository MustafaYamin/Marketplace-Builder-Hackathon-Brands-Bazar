import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" overflow-visible">
      <Image
        alt="hero image"
        src="/herosec.png"
        width={1540}
        height={716}
        className="w-full overflow-visible overflow-y-hidden h-auto"
      />
      <div className="relative -top-40 md:-top-80 lg:top-[-490px]  inset-0 flex flex-col justify-center xl:pl-16 items-start xl:gap-8 p-4 lg:p-10">
        <p className="font-bold text-white  text-[8px] lg:text-base">
          SUMMER 2020
        </p>
        <p className="leading-tight text-white text-2xl lg:text-5xl xl:text-[4rem] font-bold">
          NEW COLLECTION
        </p>
        <p className="leading-snug text-white text-base lg:text-lg w-[250px] md:w-[390px] lg:w-[400px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <Link
          href="/shop"
          className="mt-3 active:bg-[#419c6a] lg:mt-6 lg:w-[228px] lg:h-[62px] bg-[#2dc070] text-white text-center  font-bold rounded-sm py-2 px-4  lg:text-base"
        >
          <p className="mt-2  text-[14px] lg:text-sm">SHOP NOW</p>
        </Link>
      </div>
    </div>
  );
}
