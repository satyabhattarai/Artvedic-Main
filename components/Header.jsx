import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center h-[32px] text-[#F7F8F8] ">
      <ul className="flex gap-8 ">
        <li>
          <Link href="/">ARTVEDIC</Link>
        </li>

        <li>
          <Link href="/about">ABOUT</Link>
        </li>

        <li>
          <Link href="/contact">CONTACT</Link>
          </li>
        <li>
          <Link href="/cart">
            CART
            <span className="bg-white rounded text-[#1e2433] py-[4px] px-[8px] ml-[8px]">
              1
            </span>
          </Link>
        </li>
      </ul>
      <div>
        <button onClick={()=> {router.push("login")}} className="border border-[#5C6B94] rounded px-[16px] py-[4px] bg-gradient-to-r from-[#0F131B] to-transparent">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
