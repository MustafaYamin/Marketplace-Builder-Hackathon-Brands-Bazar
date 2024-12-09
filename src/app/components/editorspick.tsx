// import React from 'react';
import Image from "next/image";

export default function EditorPick() {
  return (
    <div className=" flex flex-col items-center mt-44 sm:mt-0 bg-gray-100">
      <h1 className="font-bold leading-[32px] pt-9 text-[#252B42]">
        EDITOR'S PICK
      </h1>
      <p className="text-[#737373] leading-4 text-[14px]">
        Problems trying to resolve the conflict between{" "}
      </p>

      <div className="flex sm:flex-row flex-col justify-between gap-0 sm:gap-3 items-center">
        <div className="flex flex-col sm:flex-row justify-between  sm:gap-2 pt-7">
          <div>
            <Image
              className="sm:w-[500px] lg:h-[500px] sm:h-[370px]"
              src="/editor1.png"
              alt="picture"
              width={240}
              height={242}
            />
            <button className="bg-white w-[150px] relative -top-16 left-3 h-[48px] font-bold">
              MEN
            </button>
          </div>
          <div>
            <Image
              className="sm:w-[235px] lg:h-[500px] sm:h-[370px]"
              src="/editor2.png"
              alt="picture"
              width={240}
              height={242}
            />
            <button className="bg-white w-[150px] relative -top-16 left-3 h-[48px] font-bold">
              WOMEN
            </button>
          </div>
        </div>
        <div className=" flex flex-col ">
          <div className="relative top-7">
            <Image src="/editor3.png" alt="picture" width={240} height={242} />
            <button className="bg-white w-[150px] relative -top-16 left-3 h-[40px] font-bold">
              ACCESSORIES
            </button>
          </div>
          <div>
            <Image src="/editor4.png" alt="picture" width={235} height={242} />
            <button className="bg-white w-[150px] relative -top-16 left-3 h-[40px] font-bold">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
