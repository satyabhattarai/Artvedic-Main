import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Header = () => {
  const router = useRouter();
  const [client_email, setClientEmail] = useState("");
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  useEffect(() => {
    setClientEmail(JSON.parse(localStorage.getItem("client_email")));
  }, []);
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
        {client_email && (
          <li>
            <Link className="px-8 py-1 border" href="/artistform">
              Artist
            </Link>
          </li>
        )}
      </ul>
      <div>
        {client_email && (
          <Fragment>
            <button className="text-white border px-[16px] py-[4px] border-[#5C6B94] rounded">
              {client_email}
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("client_email");
                window.location.reload();
              }}
              className="text-white border px-[16px] py-[4px] border-[#5C6B94] rounded"
            >
              LogOut
            </button>
          </Fragment>
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
    </div>
  );
};

export default Header;
