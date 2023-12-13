import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import Productcard from "@/components/Productcard";
import React from "react";
import { fetchDatafromApi } from "utils/api";
import { useRouter } from "next/router";

const Artist_profile = ({ products }) => {
  const router = useRouter();

  return (
    <div className="mt-32">
      <div className="bg-gradient-to-t from-[#263065] to-[#1e2433]">
        <div className="flex mb-32 text-white gap-9 ">
          <div className="relative items-center w-32 h-32">
            <Image
              className="rounded-full"
              src="/Images/artvedic3.jpeg"
              layout="fill"
              alt="Picture of the artist"
            />
          </div>
          <div>
            <h1 className="mb-1 text-3xl font-bold">Artist Name</h1>
            <p className="mb-4 text-xl">Username</p>
            <div className="flex gap-[600px]">
              <button
                className="px-12 py-2 text-black bg-green-200 border rounded"
                onClick={() => router.push("hirenow")}
              >
                Hire Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-3xl font-bold text-center text-gray-200 ">
            BIO
          </h1>
          <h3 className="mb-24 font-semibold text-center text-gray-200">
            when an artist fills out the form and gives bio put it here
          </h3>
        </div>
      </div>
      <div>
        <div className="mb-4 text-3xl text-green-200">Models</div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {products?.data?.map((artwork) => {
              return (
                <Productcard
                  key={`allartwork-${artwork.id}`}
                  artwork={artwork}
                />
              );
            })}
            <h3 className="text-[#F7F8F8] py-[12px] cursor-pointer">
              VIEW MORE (arrow)
            </h3>
            <h3 className="text-[#F7F8F8] py-[12px] cursor-pointer">
              VIEW LESS (arrow)
            </h3>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Artist_profile;

export async function getStaticProps() {
  const apiResult = await fetchDatafromApi("/api/all-artworks?populate=*");
  return {
    props: {
      products: apiResult,
    },
  };
}
