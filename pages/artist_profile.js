import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Productcard from "@/components/Productcard";
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
   const artistEmail = router.query.artist || "";
   const artistName = artistEmail.split("@")[0];
  return (
    <div className="mt-32">
      <div className="">
        <div className="flex mb-32 text-white gap-9 ">
          <div className="relative w-32 h-32">
          <Image
            className="max-w-full overflow-hidden rounded-full "
            src="/Images/artvedic2.jpeg"
            alt="Satya"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
          ></Image>
          </div>
          <div className="p-4">
            <h1 className="mb-1 mb-4 text-3xl font-bold">{`${artistName}`}</h1>
            <div className="flex gap-[600px]">
              <button
                className="px-12 py-2 text-black bg-green-200 border rounded"
                onClick={() =>    router.push({
            pathname: "/hirenow",
            query: { artist: router.query.artist },
  }) }>
                Hire Now
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 text-3xl text-green-200">
          {`${artistName}`}s artworks
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
