import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
      <Image
        alt="hero image"
        src="/herosec.png"
        fill
        priority
        className="object-cover w-full"
      />
      <div className="absolute inset-0 bg-black/20"> {/* Optional overlay */}
        <div className="container mx-auto h-full flex items-center px-4">
          <div className="max-w-[600px] space-y-4 md:space-y-6">
            <p className="text-white text-sm md:text-base lg:text-lg font-bold tracking-wider">
              SUMMER 2020
            </p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              NEW COLLECTION
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg max-w-[450px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#2dc070] hover:bg-[#2aa562] transition-colors text-white font-bold 
                         px-8 py-3 md:px-10 md:py-4 rounded-md text-sm md:text-base"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
