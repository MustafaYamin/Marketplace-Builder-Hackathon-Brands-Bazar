import FtPrp from "./props/ftprp";
export default function Featured() {
  return (
    <div className="w-[100wv] pb-16 my-5 gap-1 flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="leading-[50px]   text-[40px] text-wrap font-bold ">
          Featured Posts
        </h1>
        <p className="leading-[20px] px-9 md:px-0 text-wrap text-center w-[420px] pb-4  text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:  Newtonian mechanics
        </p>
      </div>
      <div className="lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        <FtPrp alt="image" src="/village.png" />
        <FtPrp alt="image" src="/pink-foxy.png" />
        <FtPrp alt="image" src="/umbrela.png" />
      </div>
    </div>
  );
}
