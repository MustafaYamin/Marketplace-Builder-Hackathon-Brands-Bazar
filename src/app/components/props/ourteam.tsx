import Image from "next/image";

interface ourTeam {
  src: string;
}

const OurTeam = (props: ourTeam) => {
  const { src } = props;
  return (
    <div className="w-[320px] h-[380px] ">
      <Image src={src} alt="" width={320} height={230} />
      <div className="flex pt-5 gap-4 flex-col items-center justify-center">
        <p className="font-bold text-[#252B42] text-sm">Username</p>
        <p className="font-bold text-[#737373] text-sm">Profession</p>

        <Image src="/social media.png" alt="socials" width={112} height={24} />
      </div>
    </div>
  );
};

export default OurTeam;
