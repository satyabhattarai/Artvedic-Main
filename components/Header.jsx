import React, { Fragment, useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import md5 from "md5";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const [client_email, setClientEmail] = useState("");
  const cart = useSelector((state) => state.cart);
  const [ ShowSearch, setShowSearch ] = useState(false);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  useEffect(() => {
    setClientEmail(JSON.parse(localStorage.getItem("client_email")));
  }, []);

const getAdorableAvatarUrl = (email) => {
  const name = email.split("@")[0]; // Get the part before the "@" symbol
  const firstLetter = name.trim().charAt(0).toUpperCase();
  return `https://api.adorable.io/avatars/200/${firstLetter}.png`;
};
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

        {/* {client_email && (
          <li>
            <Link href="/uploadform">
              <CgProfile />
            </Link>
          </li>
        )} */}
      </ul>
      <div>
        {client_email && (
          <div className="flex items-center justify-between">
            <div className="flex mr-4">
              <button className="text-white cursor-pointer px-[16px] py-[4px]  rounded">
                {client_email.split("@")[0]}
              </button>
              <Link href="/chooseform">
                <CgProfile className="text-3xl" />
              </Link>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("client_email");
                window.location.reload();
              }}
              className="text-white border px-[16px] py-[4px] border-[#5C6B94] rounded"
            >
              LogOut
            </button>
          </div>
        )}
        {!client_email && (
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
