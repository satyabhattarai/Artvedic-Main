import Footer from "./Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }) => {

  return (
    <div className=" bg-[#1E2433] flex flex-col justify-between items-center min-h-screen">
      <div className=" px-[24px] pt-[48px] max-w-[1140px] mx-auto w-full">
        <Header />
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
