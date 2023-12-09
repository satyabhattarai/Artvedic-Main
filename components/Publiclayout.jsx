import Footer from "./Footer";
import React from "react";

const Publiclayout = ({ children }) => {
  return (
    <div className=" bg-[#1E2433]">
      <div className=" px-[24px] pt-[48px] max-w-[1140px] mx-auto min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Publiclayout;
