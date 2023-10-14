//import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import React from "react";
const Cartitems = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="grid grid-cols-2 ">
          <div className="rounded-sm ml-[40px]">
            <Image
              className="rounded-sm py-[16px] px-[16px] border"
              src="/Images/artvedic14.jpeg"
              alt="img1"
              width={259}
              height={319}
            />
          </div>
          <div className="grid grid-rows-2 pl-[20px]">
            <div className="text-white ">
              summit
              <p>2023</p>
            </div>
            <div className="flex self-end justify-between text-white">
              5000
              <span>delete</span>
            </div>
          </div>
        </div>
        <div className="text-white">total</div>
      </div>
    </div>
  );
};

export default Cartitems;
