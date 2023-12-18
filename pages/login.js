import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import Link from "next/link";
import Publiclayout from "@/components/Publiclayout";
import React from "react";
import { fetchDatafromApi } from "utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (result.ok) {
      alert("Login Sucess");
      router.push("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

  const loginImages = [
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
    <>
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
        <form className="mt-[104px]" onSubmit={onSubmit}>
          <h5 className="text-white mb-[4px]">WELCOME BACK</h5>
          <p className="text-[#B7B9B9] mb-[72px]">
            We have been waiting for you
          </p>
          <label className="block text-white">Email</label>
          <input
            className=" mt-[8px] text-white mb-[16px] bg-transparent border border-[#5C6B94] rounded pl-[12px]  py-[8px] pr-[79px]"
            placeholder="maryjane@gmail.com"
            type="email"
            name="email"
            id="email"
          ></input>
          <label className="block text-white">Password</label>
          <input
            className="block  text-white mt-[8px] mb-[16px] bg-transparent border border-[#5C6B94] rounded  pl-[12px] py-[8px] pr-[79px]"
            placeholder=".........."
            type="password"
            name="password"
            id="password"
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
            Donot have an account?
            <a
              onClick={() => {
                router.push("register");
              }}
              className="text-[#B7B9B9] cursor-pointer"
            >
              Get Started
            </a>
          </p>
        </form>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
          >
            <Masonry gutter="24px">
              {loginImages.map((img) => {
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
    </>
  );
};
Login.getLayout = function (page) {
  return <Publiclayout>{page}</Publiclayout>;
};
export default Login;
