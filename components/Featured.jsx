import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-8 py-[48px]">
        <div className="relative h-[600px] border border-[#5C6B94] rounded p-[16px] ">
          <div className="relative h-full ">
            {" "}
            <Image
              className="rounded inset-[16px]"
              src={"https://picsum.photos/400/400"}
              alt="img1"
              layout="fill"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-8 ">
          <div className="relative">
            <Image
              className="rounded"
              src={"https://picsum.photos/400/400"}
              alt="img1"
              layout="fill"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <Image
                className="rounded"
                src={"https://picsum.photos/300/400"}
                alt="img1"
                layout="fill"
              />
            </div>
            <div className="relative">
              <Image
                className="rounded"
                src={"https://picsum.photos/200/400"}
                alt="img1"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[#F7F8F8] ">BROWSE BY CATEGORY</h3>
        <div className="grid grid-cols-3 gap-8 pt-[16px] pb-[12px]">
          <div className="relative aspect-square">
            <Image
              src={"https://picsum.photos/100/100"}
              alt="imagebrowse"
              layout="fill"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src={"https://picsum.photos/300/100"}
              alt="imagebrowse2"
              layout="fill"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src={"https://picsum.photos/200/100"}
              alt="imagebrowse3"
              layout="fill"
            />
          </div>
        </div>
        <h3 className="text-[#F7F8F8]">VIEW ALL (arrow) </h3>
      </div>
      <div className="py-[48px]">
        <h3 className="text-[#F7F8F8] pb-[16px] ">ALL ARTWORKS</h3>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
          <Masonry gutter="24px">
            <Image
              className="w-full h-auto"
              src={"https://picsum.photos/400/900"}
              alt="imagebrowse5"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="w-full h-auto"
              src={"https://picsum.photos/600/900"}
              alt="imagebrowse3"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="w-full h-auto"
              src={"https://picsum.photos/500/600"}
              alt="imagebrowse3"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              className="w-full h-auto"
              sizes="100vw"
              src={"https://picsum.photos/400/400"}
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-full h-auto"
              sizes="100vw"
              src={"https://picsum.photos/300/400"}
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-auto h-auto"
              sizes="100vw"
              src={"https://picsum.photos/800/700"}
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-full h-auto"
              sizes="100vw"
              src={"https://picsum.photos/600/400"}
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <Image
              className="w-full h-auto"
              sizes="100vw"
              src={"https://picsum.photos/400/400"}
              alt="imagebrowse3"
              width={0}
              height={0}
            />
            <h3 className="text-[#F7F8F8] py-[12px]">VIEW ALL (arrow)</h3>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Featured;
