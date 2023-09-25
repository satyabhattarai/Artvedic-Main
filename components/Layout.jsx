import Footer from "./Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({ children }) => {
  
  return (
    <div className=" bg-[#1E2433]">
      <div className=" px-[24px] pt-[48px] max-w-[1140px] mx-auto">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
