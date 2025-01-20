import Image from "next/image";
export default function Parteners() {
  return (
    <div className="w-[100vw] bg-white h-auto py-7 flex items-center justify-center">
      <div className="w-[100vw]  gap-20  items-center justify-center h-auto py-7 flex flex-wrap bg-transparent">
        <Image
          className="md:w-20 lg:w-32"
          src="/p-1.png"
          alt="our partners"
          width={90}
          height={44}
        />
        <Image
          className="md:w-20 lg:w-32"
          src="/p-2.png"
          alt="our partners"
          width={90}
          height={44}
        />
        <Image
          className="md:w-20 lg:w-32"
          src="/p-3.png"
          alt="our partners"
          width={90}
          height={44}
        />
        <Image
          className="md:w-20 lg:w-32"
          src="/p-4.png"
          alt="our partners"
          width={90}
          height={44}
        />
        <Image
          className="md:w-20 lg:w-32"
          src="/p-5.png"
          alt="our partners"
          width={90}
          height={44}
        />
        <Image
          className="md:w-20 lg:w-32"
          src="/p-6.png"
          alt="our partners"
          width={90}
          height={44}
        />
      </div>
    </div>
  );
}
