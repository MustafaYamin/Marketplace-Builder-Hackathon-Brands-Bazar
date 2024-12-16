import Parteners from "../components/partners";
import Footer from "../components/footer";
import Image from "next/image";
import BsellerProp from "../components/props/bsellerpro";
import NavBar from "../components/header";

export default function Product() {
  const review = "0";
  return (
    <div>
      <NavBar />
      <div className="flex bg-[#ECECEC] pt-3  w-[100vw] relative  pl-28  items-center gap-3">
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

      <div className="w-[100vw] flex flex-col lg:flex-row   gap-56 bg-[#ECECEC] h-auto py-20">
        <div className="relative md:left-24 -top-8 ">
          <Image
            className=""
            src="/yellow-chair.jpg"
            alt="product for sale"
            width={500}
            height={400}
          />
          <div className="flex lg:left-5  relative md:-left-28 -top-52 left-6 lg:w-[400px] gap-52 justify-evenly">
            <Image
              className="relative right-11 lg:right-4 lg: "
              alt=" radio img"
              width={22}
              height={40}
              src="/ChevronLeft.png"
            />
            <Image
              alt=" radio img"
              width={22}
              height={40}
              src="/ChevronRight.png"
            />
          </div>
          <div className="flex relative   gap-3">
            <Image
              src="/gray-chair.jpg"
              alt="other pics"
              width={100}
              height={75}
            />
            <Image
              className="opacity-30"
              src="/yellow-chair.jpg"
              alt="other pics"
              width={100}
              height={75}
            />
          </div>
        </div>

        <div className=" flex flex-col  w-[100vw]  items-center lg:items-start  lg:-top-0 relative -top-28  ">
          <p className="text-[20px]  leading-[30px] text-[#252B42]">
            Floating Phone
          </p>

          <div className="flex items-center gap-1">
            <Image
              src="/star.png"
              alt=" rating stars "
              width={14}
              height={10}
            />
            <Image
              src="/star.png"
              alt=" rating stars "
              width={14}
              height={10}
            />
            <Image
              src="/star.png"
              alt=" rating stars "
              width={14}
              height={10}
            />
            <Image
              src="/star.png"
              alt=" rating stars "
              width={14}
              height={10}
            />
            <Image
              src="/holo-star.png"
              alt=" rating stars "
              width={14}
              height={10}
            />

            <p className="leading-8 text-sm font-bold text-[#737373]">
              10 Reviews
            </p>
          </div>
          <div>
            <div className="font-bold   w-[105px]  text-[#252B42] text-[24px] leading-8">
              $1,139.33
            </div>
            <div className="flex  gap-2 w-40 font-bold text-[14px] leading-6">
              <p className="text-[#737373]">Available :</p>
              <p className="text-[#23A6F0]">In Stock</p>
            </div>

            <div className="w-[270px] md:w-[400px]  h-[60px] text-[#858585] pb-24 border-b-[1px] border-[#BDBDBD] text-[14px] text-wrap leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </div>
            <div className="flex  pt-4 gap-5">
              <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
            </div>

            <div className="flex flex-col md:flex-row  items-center gap-4">
              <button className="w-36 h-11 mt-9 rounded-md bg-[#23A6F0] text-white">
                Select Options
              </button>
              <div className="flex">
                <Image
                  className="h-12 mt-9"
                  src="/like.png"
                  alt="options"
                  width={50}
                  height={3}
                />
                <Image
                  className="h-12 mt-9"
                  src="/basket.png"
                  alt="options"
                  width={50}
                  height={3}
                />
                <Image
                  className="h-12 mt-9"
                  src="/more.png"
                  alt="options"
                  width={50}
                  height={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex   justify-center  md:gap-11 py-4 gap-3 pl-3 md:pl-5   w-[100vw] h-12">
        <div>Description</div>
        <div>Additional Information</div>
        <div className="flex  gap-1">
          <div>Reviews</div>
          <div>({review})</div>
        </div>
      </div>
      <div className="w-[100vw] border-t-[1px] border-[#e1e1e1]   xl:w-[90vw] px-6 mt-14  gap-10 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto py-5 ">
        <div>
          <Image
            className="shadow-xl  rounded-md shadow-[#aaaaaa] "
            src="/chair.png"
            alt="chait"
            width={300}
            height={200}
          />
        </div>

        <div className="w-[332px] gap-3 flex flex-col h-auto">
          <p className="test-[40px] leading-8 font-bold w-[310px] h-8 text-[#252B42]">
            {" "}
            the quick fox jumps over
          </p>
          <p className="text-[#737373] text-wrap text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        <div>
          <p className="test-[40px] leading-8 pb-2 font-bold w-[310px] flex  h-auto text-[#252B42]">
            {" "}
            the quick fox jumps over
          </p>

          <div className="flex flex-col gap-3 h-auto">
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>

          <p className="test-[40px] pb-2 leading-8 font-bold w-[310px] flex  h-auto text-[#252B42]">
            {" "}
            the quick fox jumps over
          </p>

          <div className="flex flex-col gap-3 h-auto">
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-4 ">
              <Image
                className="w-[10px] relative top-2 h-3"
                src="/home-shop.png"
                alt="arrow"
                width={8}
                height={9}
              />
              <p className="text-[#737373] font-bold text-sm leading-6">
                the quick fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] flex items-center justify-center flex-col bg-[#FAFAFA] py-11">
        <div className="w-[70vw] border-b-2 mb-8 border-[#ECECEC] pb-3 text-[#252B42] text-24 leading-8 font-bold">
          BESTSELLER PRODUCTS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-9 gap-y-0    justify-center">
          <BsellerProp src="/Bs-1.png" alt="BS" />
          <BsellerProp src="/Bs-2.png" alt="BS" />
          <BsellerProp src="/Bs-3.png" alt="BS" />
          <BsellerProp src="/Bs-4.png" alt="BS" />

          <BsellerProp src="/Bs-5.png" alt="BS" />
          <BsellerProp src="/Bs-6.png" alt="BS" />
          <BsellerProp src="/Bs-1.png" alt="BS" />
          <BsellerProp src="/Bs-2.png" alt="BS" />
        </div>
      </div>

      <Parteners />
      <Footer />
    </div>
  );
}
