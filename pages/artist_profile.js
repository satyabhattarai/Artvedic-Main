import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import Productcard from "@/components/Productcard";
import React, { useState, useEffect } from "react";
import { fetchDatafromApi } from "utils/api";
import { useRouter } from "next/router";

const Artist_profile = () => {
  const router = useRouter();
  const [artistWorks, setArtistWorks] = useState([]);

  useEffect(() => {
    const artist = router.query.artist || "undefined";
    async function getArtistWorks() {
      // api result is a Promise waiting for data to be fetched from server
      const apiResult = await fetchDatafromApi(
        `/api/all-artworks?populate=*&filters[artist][$eq]=${artist}`
      );
      return apiResult;
    }
    getArtistWorks()
      .then((res) => {
        setArtistWorks(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-32">
      <div className="">
        <div className="flex mb-32 text-white gap-9 ">
          <div className="p-4">
            <h1 className="mb-1 text-3xl font-bold mb-4">
              {router.query.artist}
            </h1>
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
        <div className="mb-4 text-3xl text-green-200">
          {router.query.artist}'s artworks
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
          {artistWorks?.data && (
            <Masonry gutter="24px">
              {artistWorks?.data?.map((artwork) => {
                return (
                  <Productcard
                    key={`allartwork-${artwork.id}`}
                    artwork={artwork}
                  />
                );
              })}
            </Masonry>
          )}
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Artist_profile;
