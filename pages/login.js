import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import Link from "next/link";
import Publiclayout from "@/components/Publiclayout";
import React from "react";

const Login = () => {
  return (<>
        <div className="flex justify-between items-center h-[32px] text-[#F7F8F8] ">
      <ul className="flex gap-8 ">
        <li>
          <Link href="/">ARTVEDIC</Link>
        </li>

        <li>
          <Link href="/about">ABOUT</Link>
        </li>

        <li>
          <Link href="/contact">CONTACT</Link></li>
      </ul>
    </div>
    <div className="grid grid-cols-2">
      <div className="mt-[104px]">
        <h5 className="text-white mb-[4px]">WELCOME BACK</h5>
        <p className="text-[#B7B9B9] mb-[72px]">We have been waiting for you</p>
        <label className="block text-white">Email</label>
        <input
          className=" mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded pl-[12px]  py-[8px] pr-[79px]"
          placeholder="test_email@gmail.com"
        ></input>
        <label className="block text-white">Password</label>
        <input
          className="block  mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded  pl-[12px] py-[8px] pr-[79px]"
          placeholder=".........."
        ></input>
        <button
          type="submit"
          className="text-white border px-[16px] py-[4px] border-[#5C6B94] rounded"
        >
          LOGIN
        </button>
        <a href="" className="text-[#B7B9B9] ml-[80px]">
          Forgot Password?
        </a>
        <p className="mt-[32px] text-[#F7F8F8]">
          Donot have an account?<a className="text-[#B7B9B9]"> Get Started</a>
        </p>
      </div>
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
          <Masonry gutter="24px">
            <Image
              className="w-full h-auto"
              src="/Images/artvedic18.jpeg"
              alt="imagebrowse5"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="w-full h-auto"
              src="/Images/artvedic19.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="w-full h-auto"
              src="/Images/artvedic20.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="w-full h-auto"
              sizes="100vw"
              src="/Images/artvedic21.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-full h-auto"
              sizes="100vw"
              src="/Images/artvedic22.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-auto h-auto"
              sizes="100vw"
              src="/Images/artvedic23.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-full h-auto"
              sizes="100vw"
              src="/Images/artvedic24.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-full h-auto"
              sizes="100vw"
              src="/Images/artvedic26.jpeg"
              alt="imagebrowse3"
              width={0}
              height={0}
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
    </>
  );
};
Login.getLayout=function(page){
  return <Publiclayout>{page}</Publiclayout>
}
export default Login;
