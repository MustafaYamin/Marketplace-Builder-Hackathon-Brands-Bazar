import Link from "next/link";

import Image from "next/image";

export default function NeuralUni() {
  return (
    <div className="flex flex-col md:flex-row  w-[100vw] ">
      <Image
        className="pl-10 md:w-[450px] lg:w-[650px] md:h-[500px] "
        alt="neural universe"
        src="/neural.png"
        width={600}
        height={700}
      />
      <div className="  flex flex-col justify-center xl:pl-16 items-start xl:gap-8 p-4 lg:p-10">
        <p className="font-bold text-[#BDBDBD] text-[8px] lg:text-base">
          SUMMER 2020
        </p>
        <p className="leading-tight  text-2xl lg:text-5xl xl:text-[5rem] font-bold">
          Part of the Neural Universe
        </p>
        <p className="leading-snug text-[#737373] text-base lg:text-lg lg:w-[400px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex gap-2">
          <Link href="/product">
            <button className="mt-4 lg:mt-6 lg:w-[228px] lg:h-[62px] bg-[#2dc070] text-white font-bold rounded-sm py-2 px-4 text-sm lg:text-base">
              BUY NOW
            </button>
          </Link>

          <button className="mt-4 lg:mt-6 lg:w-[228px] border-2 border-[#2dc070] lg:h-[62px] text-[#2dc070]  font-bold rounded-sm py-2 px-4 text-sm lg:text-base">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
