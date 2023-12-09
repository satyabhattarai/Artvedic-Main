import { API_URL } from "utils/urls";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Productcard = ({artwork}) => {
  const router = useRouter();
  return (
    <div className="border rounded-lg shadow dark:border-slate-900 dark:bg-slate-800">
      <Image
        onClick={() => {
          router.push({
            pathname: '/productitems',
            query: {artwork: JSON.stringify(artwork)}
          });
        }}
        key={`allartwork-${artwork.id}`}
        className="w-full h-auto"
        src={`${API_URL}${artwork.attributes.img.data.attributes.url}`}
        alt="imagebrowse5"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="px-[4px] text-white">
        <h2 className="pb-[4px]">{artwork.attributes.name}</h2>
        <p className="py-[4px] text-lg">{artwork.attributes.description}</p>
        <p className="text-xl mb-[10px]">
          Price: &#8360; {artwork.attributes.price}
        </p>
      </div>
    </div>
  );
};

export default Productcard;
