import React from "react";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-[32px] text-[#F7F8F8] ">
      <ul className="flex gap-8 ">
        <li>ARTVEDIC</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>
          CART{" "}
          <span className="bg-white rounded text-[#1e2433] py-[4px] px-[8px] ml-[8px]">
            1
          </span>
        </li>
      </ul>
      <div>
        <button className="border border-[#5C6B94] rounded px-[16px] py-[4px] bg-gradient-to-r from-[#0F131B] to-transparent">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
