import React, { Fragment, useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Search from "./Search";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const [ShowSearch, setShowSearch] = useState(false);
  const { data: session } = useSession();
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  useEffect(() => {
    if (session == null) return;
    console.log(session);
  }, [session]);

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
              {getItemsCount()}
            </span>
          </Link>
        </li>
        <li>
          <CiSearch onClick={() => setShowSearch(true)} />
        </li>
      </ul>
      <div>
        {session && (
          <div className="flex items-center justify-between">
            <div className="flex mr-4">
              <button className="text-white cursor-pointer px-[16px] py-[4px]  rounded">
                {session.user.email}
              </button>
              <Link href="/chooseform">
                <CgProfile className="text-3xl" />
              </Link>
            </div>
            <button
              onClick={signOut}
              className="text-white border px-[16px] py-[4px] border-[#5C6B94] rounded"
            >
              LogOut
            </button>
          </div>
        )}
        {!session && (
          <button
            onClick={() => {
              router.push("login");
            }}
            className="border border-[#5C6B94] rounded px-[16px] py-[4px] bg-gradient-to-r from-[#0F131B] to-transparent"
          >
            Log In
          </button>
        )}
      </div>
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </div>
  );
};

export default Header;
