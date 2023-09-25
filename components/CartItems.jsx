//import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import React from "react";
const Cartitems = () => {
  return (
    <div>
      <div className="grid grid-cols-2 text-white gap-[133px]">
        <div className="grid grid-cols-2">
          <div className="">
            <Image
              className="rounded inset-[16px]"
              src="/Images/artvedic21.jpeg"
              alt="img1"
              width={259}
              height={319}
            />
          </div>
          <div>
            Saber
            <p>2023</p>
            <div className="flex justify-between">
              rs.5000
              <div>delete</div>
            </div>
          </div>

          <div className="">
            <Image
              className="rounded inset-[16px]"
              src="/Images/artvedic27.jpeg"
              alt="img1"
              width={259}
              height={319}
            />
          </div>
          <div>
            Eye <p>2023</p>
          </div>
        </div>
        <div >Total Rs.10000
          <p>
          <span className="border py-[4px] px-[16px]">COMPLETE ORDER</span>
</p></div>
      </div>
    </div>
  );
};

export default Cartitems;
