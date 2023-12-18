import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Featured from "@/components/Featured";
import Link from "next/link";
import Productcard from "@/components/Productcard";
import React from "react";
import { fetchDatafromApi } from "utils/api";

const Category = ({ category, products, name }) => {
  if (!products) return <p>Loading...</p>;
  return (
    <div>
      <h1 className="mt-8 mb-8 text-3xl font-semibold text-white">
        {category?.data[0]?.attributes?.name}
      </h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
        <Masonry gutter="24px">
          {products?.data?.map((product) => {
            return <Productcard key={product?.id} artwork={product} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Category;
export async function getStaticPaths() {
  const category = await fetchDatafromApi("/api/categories?populate=*");

  const paths = category.data.map((c) => ({
    params: {
      name: c.attributes.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { name } }) {
  const category = await fetchDatafromApi(
    `/api/categories?filters[name][$eq]=${name}`
  );
  const products = await fetchDatafromApi(
    `/api/all-artworks?populate=*&[filters][categories][$eq]=${name}`
  );
  const artist = await fetchDatafromApi(
    `/api/all-artworks?populate=*&filters[type]=acrylics}`
  );

  return {
    props: {
      category,
      products,
      name,
    },
  };
}
