import Image from "next/image";

export default function HeroSection() {
  return (
    <div className=" overflow-visible">
      <Image
        alt="hero image"
        src="/herosec.png"
        width={1540}
        height={716}
        className="w-full overflow-visible overflow-y-hidden-hidden h-auto"
      />
      <div className="absolute  sm:inset-0 flex flex-col justify-center xl:pl-16 items-start xl:gap-8 p-4 lg:p-10">
        <p className="font-bold sm:text-white text-[8px] lg:text-base">
          SUMMER 2020
        </p>
        <p className="leading-tight sm:text-white text-2xl lg:text-5xl xl:text-[4rem] font-bold">
          NEW COLLECTION
        </p>
        <p className="leading-snug sm:text-white text-base lg:text-lg lg:w-[400px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="mt-4 lg:mt-6 lg:w-[228px] lg:h-[62px] bg-[#2dc070] text-white font-bold rounded-sm py-2 px-4 text-sm lg:text-base">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
