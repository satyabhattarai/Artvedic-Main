import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Featured from "@/components/Featured";
import Link from "next/link";
import Productcard from "@/components/Productcard";
import React from "react";
import { fetchDatafromApi } from "utils/api";

const Category = ({ category, products, slug }) => {

  if (!products) return <p>Loading...</p>;
  return (
    <div>
      <h1 className="text-white">{category?.data[0]?.attributes?.name}</h1>
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
      slug: c.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDatafromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDatafromApi(
    `/api/all-artworks?populate=*&[filters][categories][slug][$eq]=${slug}`
  );
     const artist = await fetchDatafromApi(
       `/api/all-artworks?populate=*&filters[type]=acrylics}`
     );

  return {
    props: {
      category,
      products,
      slug,

    },
  };
}
