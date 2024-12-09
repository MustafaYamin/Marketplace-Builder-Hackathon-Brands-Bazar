import Image from "next/image";

interface FtImgs {
  src: string;
  alt: string;
}

const FtPrp = (props: FtImgs) => {
  const { src, alt } = props;
  return (
    <div className="shadow-md">
      <Image src={src} alt={alt} width={330} height={300} />
      <div className="">
        <div className="flex py-3 w-[159px] pl-2 gap-3 ">
          <p className="text-[#8EC2F2] leading-[16px] text-[12px] ">Google</p>
          <p className="text-[#737373] leading-[16px] text-[12px] ">Trending</p>
          <p className="text-[#737373] leading-[16px] text-[12px] ">News</p>
        </div>
        <p className="text-[20px] pl-2 leading-[20px] pb-3 w-[240px] text-[#252B42] ">
          Loudest à la Madison #1 (L'integral)
        </p>
        <p className="leading-[20px] pl-2 w-[280px] pb-3 text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="w-[280px] pb-3 pl-2 flex justify-between gap-10 ">
          <Image alt="img" width={100} height={16} src="/date.png" />
          <Image alt="img" width={100} height={16} src="/10cmnt.png" />
        </div>
        <Image
          className="pl-2"
          width={104}
          height={14}
          alt="image"
          src="/lm.png"
        />
      </div>
    </div>
  );
};

export default FtPrp;
