import Image from "next/image";

interface BestPrp {
  src: string;
  alt: string;
}

const BestsellerProp = (props: BestPrp) => {
  const { src, alt } = props;
  return (
    <div className="w-[241px] h-[639px]">
      <Image alt={alt} src={src} width={239} height={420} />
      <div className="w-[239px] h-[188px] flex flex-col pt-1 items-center gap-2 ">
        <h1 className="font-bold text-[16px] text-[#252B42] leading-[24px]">
          Graphic Design
        </h1>
        <p className="text-[14px] leading-[24px] font-bold text-[#737373]">
          English Department
        </p>
        <div className="flex gap-1 items-center">
          <p className="font-bold text-[16px] text-[#BDBDBD]">$16.48</p>
          <p className="font-bold text-[16px] text-[#23856D] ">$6.48</p>
        </div>
        <div className="py-3 flex gap-2">
          <div className="rounded-full w-[16px] h-[16px] bg-[#23A6F0] "></div>
          <div className="rounded-full w-[16px] h-[16px] bg-[#23856D]"></div>
          <div className="rounded-full w-[16px] h-[16px] bg-[#E77C40]"></div>
          <div className="rounded-full w-[16px] h-[16px] bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProp;
