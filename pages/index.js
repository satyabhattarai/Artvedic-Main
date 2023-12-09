import Featured from "@/components/Featured";
import Image from "next/image";
import { fetchDatafromApi } from "utils/api";

export default function Home({ product,category,workshop }) {
  return (
    <div>
      <Featured products={product} category={category}  workshop={workshop}/>
    </div>
  );
}

export async function getStaticProps() {
const apiResult = await fetchDatafromApi("/api/all-artworks?populate=*");
const categories = await fetchDatafromApi("/api/categories?populate=*");
const workshop = await fetchDatafromApi("/api/workshops?populate=*");
  return {
    props: {
      product: apiResult,
      category: categories,
      workshop: workshop,
    },
  };
}
