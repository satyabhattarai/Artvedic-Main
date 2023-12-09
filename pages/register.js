import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import Link from "next/link";
import Publiclayout from "@/components/Publiclayout";
import React from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
   const registerImages = [
     { id: 1, path: "/Images/artvedic18.jpeg" },
     { id: 2, path: "/Images/artvedic19.jpeg" },
     { id: 3, path: "/Images/artvedic20.jpeg" },
     { id: 4, path: "/Images/artvedic21.jpeg" },
     { id: 5, path: "/Images/artvedic22.jpeg" },
     { id: 6, path: "/Images/artvedic23.jpeg" },
     { id: 7, path: "/Images/artvedic24.jpeg" },
     { id: 8, path: "/Images/artvedic26.jpeg" },
   ];
  return (
    <div>
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
        </ul>
      </div>
      <div className="grid grid-cols-2">
        <div className="mt-[104px]">
          <h5 className="text-white mb-[4px]">WELCOME TO ARTVEDIC</h5>
          <p className="text-[#B7B9B9] mb-[72px]">
            Delve into our feelings,sight and emotions through our artwork.
          </p>
          <label className="block text-white">FULL NAME</label>
          <input
            className=" mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded pl-[12px]  py-[8px] pr-[79px]"
            placeholder="Saibaba Nepal"
          ></input>
          <label className="block text-white">EMAIL</label>
          <input
            className=" mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded pl-[12px]  py-[8px] pr-[79px]"
            placeholder="test_email@gmail.com"
          ></input>
          <label className="block text-white">PASSWORD</label>
          <input
            className="block  mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded  pl-[12px] py-[8px] pr-[79px]"
            placeholder=".........."
          ></input>
          <label className="block text-white">CONFIRM PASSWORD</label>
          <input
            className="block  mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded  pl-[12px] py-[8px] pr-[79px]"
            placeholder=".........."
          ></input>
          <button
            type="submit"
            className="text-white border px-[16px] py-[4px] border-[#5C6B94] rounded"
          >
            REGISTER
          </button>
          <p className="mt-[32px] text-[#F7F8F8]">
            Already have an account?
            <a
              onClick={() => {
                router.push("login");
              }}
              className="text-[#B7B9B9] cursor-pointer"
            >
              Login
            </a>
          </p>
        </div>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
          >
            <Masonry gutter="24px">
              {registerImages.map((img) => {
                return (
                  <Image
                    key={`group-${img.id}`}
                    className="w-full h-auto"
                    src={img.path}
                    alt="imagebrowse5"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};
Register.getLayout = function (page) {
  return <Publiclayout>{page}</Publiclayout>;
};

export default Register;
