//import { RiDeleteBin6Line } from "react-icons/ri";

import Image from "next/image";
import React from "react";

const Cartitems = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-[40px] gap-[133px]">
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-2 ">
            <div className="rounded-sm">
              <Image
                className="rounded-sm py-[16px] px-[16px] border"
                src="/Images/artvedic14.jpeg"
                alt="img1"
                width={256}
                height={320}
              />
            </div>
            <div className="grid grid-rows-2 pl-[20px]">
              <div className="text-white ">
                summit
                <p>2023</p>
              </div>
              <div className="flex self-end justify-between text-white">
                5000
                <span className="text-red-500">delete</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="rounded-sm">
              <Image
                className="rounded-sm py-[16px] px-[16px] border"
                src="/Images/artvedic14.jpeg"
                alt="img1"
                width={256}
                height={320}
              />
            </div>
            <div className="grid grid-rows-2 pl-[20px]">
              <div className="text-white ">
                summit
                <p>2023</p>
              </div>
              <div className="flex self-end justify-between text-white">
                5000
                <span className="text-red-500">delete</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white">
          Total
          <span className="text-sm text-white/[0.67] pl-[12px]">Rs.10000</span>
          <p>
            <button className="border px-[16px] py-[4px] text-sm mt-[10px]">
              COMPLETE ORDER
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
