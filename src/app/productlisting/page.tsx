import Image from "next/image";
import Parteners from "../components/partners";
import Footer from "../components/footer";
import BestsellerProp from "../components/props/bestseller";
export default function ProductsListing() {
  return (
    <div className="bg-[#FAFAFA] w-[100vw]">
      <div className=" w-[100vw] flex items-center justify-between px-20  h-20 bg-[#FAFAFA] ">
        <div className="text-[#252B42] text-[24px] font-bold leadin-[32px] ">
          {" "}
          SHOP{" "}
        </div>
        <div className="flex items-center gap-3">
          <div className="text-[#252B42] font-bold text-[14px] leading-6">
            Home
          </div>
          <div>
            <Image
              alt="hoem to shop"
              src="/home-shop.png"
              width={8}
              height={15}
            />
          </div>
          <div className="text-[#BDBDBD] font-bold text-[14px] leading-6">
            Shop
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] flex items-  justify-center w-[100vw] ">
        <div className="bg-[#FAFAFA] pb-8 mt-[-30px]  justify-center w-[80vw] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
          <div className="flex flex-col items-center ">
            <div className="gap-2 justify-center text-center flex flex-col relative top-32">
              <p className="font-bold text-[16px] leading-6 text-white">
                Cloths
              </p>
              <p className="text-white leading-[20px] text-[14px]">5 Items</p>
            </div>
            <Image
              src="/shop-md-bg1.png"
              alt="shop image"
              width={220}
              height={230}
            />
          </div>
          <div className="flex flex-col items-center ">
            <div className="gap-2 justify-center text-center flex flex-col relative top-32">
              <p className="font-bold text-[16px] leading-6 text-white">
                Cloths
              </p>
              <p className="text-white leading-[20px] text-[14px]">5 Items</p>
            </div>
            <Image
              src="/shop-md-bg2.png"
              alt="shop image"
              width={220}
              height={230}
            />
          </div>
          <div className="flex flex-col items-center ">
            <div className="gap-2 justify-center text-center flex flex-col relative top-32">
              <p className="font-bold text-[16px] leading-6 text-white">
                Cloths
              </p>
              <p className="text-white leading-[20px] text-[14px]">5 Items</p>
            </div>
            <Image
              src="/shop-md-bg3.png"
              alt="shop image"
              width={220}
              height={230}
            />
          </div>
          <div className="flex flex-col items-center ">
            <div className="gap-2 justify-center text-center flex flex-col relative top-32">
              <p className="font-bold text-[16px] leading-6 text-white">
                Cloths
              </p>
              <p className="text-white leading-[20px] text-[14px]">5 Items</p>
            </div>
            <Image
              src="/shop-md-bg4.png"
              alt="shop image"
              width={220}
              height={230}
            />
          </div>
          <div className="flex flex-col items-center ">
            <div className="gap-2 justify-center text-center flex flex-col relative top-32">
              <p className="font-bold text-[16px] leading-6 text-white">
                Cloths
              </p>
              <p className="text-white leading-[20px] text-[14px]">5 Items</p>
            </div>
            <Image
              src="/shop-md-bg5.png"
              alt="shop image"
              width={220}
              height={230}
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row pt-28 md:pt-0 md:pb-0 pb-36 bg-white items-center justify-center w-[100vw] h-24  ">
        <div className="w-[90vw] flex-col  md:flex-row gap-4 md:gap-0 flex items-center justify-between h-24 ">
          <div className="font-bold text-[14px] leading-6 text-[#737373]">
            Showing all 12 results
          </div>
          <div className="flex  gap-2 items-center">
            <div className="font-bold text-[14px] leading-6 text-[#737373]">
              {" "}
              views:
            </div>
            <div className="border-2 w-11 h-11 flex items-center justify-center border-[#ECECEC] rounded-xl">
              <Image
                className=""
                src="/V-window.png"
                alt="view image"
                width={14}
                height={14}
              />
            </div>
            <div className="border-2 flex items-center justify-center w-11 h-11 border-[#ECECEC] rounded-xl">
              <Image
                src="/V-tasks.png "
                alt="view image"
                width={14}
                height={10}
              />
            </div>
          </div>
          <div className="flex  items-center gap-2">
            <button className="h-12 border-2 border-[#DDDDDD] rounded-md w-24 text-[14px] flex items-center justify-center gap-2 text-[#737373] leading-7 ">
              Popularity{" "}
              <Image src="/pop-arow.png" alt="img" width={8} height={14} />
            </button>
            <button className="h-12 font-bold bg-[#23A6F0] text-white w-24 rounded-md">
              {" "}
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Parteners />

        <Footer />
      </div>

      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-9 items-center justify-center">
          <BestsellerProp src="/fixed-height-2.png" alt="img" />
          <BestsellerProp src="/fixed-height.png" alt="img" />
          <BestsellerProp src="/pro-cover-1.png" alt="img" />
          <BestsellerProp src="/product-cover-5.png" alt="img" />

          <BestsellerProp src="/pro-cover-2.png" alt="img" />
          <BestsellerProp src="/pro-cover-3.png" alt="img" />
          <BestsellerProp src="/pro-cover-4.png" alt="img" />
          <BestsellerProp src="/pro-cover-5.png" alt="img" />

          <BestsellerProp src="/pro-cover-6.png" alt="img" />
          <BestsellerProp src="/pro-cover-7.png" alt="img" />
          <BestsellerProp src="/pro-cover-8.png" alt="img" />
          <BestsellerProp src="/pro-cover-9.png" alt="img" />
        </div>
      </div>

      <div className="w-[100vw] py-7 flex items-center justify-center">
        <div className="w-72  flex  border-2 border-[#BDBDBD] rounded-md ">
          <div className="h-16 font-bold cursor-pointer active:bg-[#BDBDBD] active:text-[#F3F3F3] flex items-center justify-center text-[#BDBDBD] bg-[#F3F3F3]  border-r-2 w-[84px] border-[#BDBDBD]">
            First
          </div>
          <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0]  flex items-center justify-center text-[#23A6F0]  border-r-2 w-11 border-[#BDBDBD]">
            1
          </div>
          <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0]  flex items-center justify-center text-[#23A6F0]  border-r-2 w-11 border-[#BDBDBD]">
            2
          </div>
          <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0]  flex items-center justify-center text-[#23A6F0]  border-r-2 w-11 border-[#BDBDBD]">
            3
          </div>
          <div className="h-16 font-bold cursor-pointer active:text-white active:bg-[#23A6F0] flex items-center justify-center text-[#23A6F0] w-[84px] ">
            Next
          </div>
        </div>
      </div>

      <div className="lg:hidden ">
        <Parteners />

        <Footer />
      </div>
    </div>
  );
}
