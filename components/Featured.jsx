import "react-multi-carousel/lib/styles.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect, useState } from "react";

import { API_URL } from "../utils/urls";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import Productcard from "./Productcard";
import { fetchDatafromApi } from "utils/api";
import { useRouter } from "next/router";

const Featured = ({ products, category, workshop }) => {
    const router = useRouter();

    // const [data, setData] = useState(null)
    // useEffect(() => {
    //   fetchartworks();
    // }, []);
    // const fetchartworks = async () => {
    //   const apiResult = await fetchDatafromApi("/api/all-artworks");
    // The above and below code is same let it be OR Understand this later...
    // const {data} = await fetchDatafromApi("/api/all-artworks");
    //   setData(apiResult.data);
    // };
    const [isMoving, setIsMoving] = useState(false);
    const handleviewmore = () => {
        setvisible((prev) => prev + 4);
    };
    const handleviewmorecat = () => {
        setvisiblecat((prev) => prev + 3);
    };
    const handleviewless = () => {
        setvisible((prev) => prev - 4);
    };
    const handleviewlesscat = () => {
        setvisiblecat((prev) => prev - 3);
    };
    const [visible, setvisible] = useState(8);
    const [visiblecat, setvisiblecat] = useState(3);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    console.log(products);
    const featuredItems = [
        { id: 1, path: "/Images/artvedic17.jpeg" },
        { id: 2, path: "/Images/artvedic27.jpeg" },
        { id: 3, path: "/Images/artvedic15.jpeg" },
        { id: 4, path: "/Images/artvedic14.jpeg" },
    ];
    // const workshops = [
    //   { id: 1, path: "/Images/artvedic12.jpeg" },
    //   { id: 2, path: "/Images/artvedic11.jpeg" },
    //   { id: 3, path: "/Images/artvedic13.jpeg" },
    //   { id: 4, path: "/Images/artvedic12.jpeg" },
    //   { id: 5, path: "/Images/artvedic11.jpeg" },
    //   { id: 6, path: "/Images/artvedic13.jpeg" },
    //   { id: 7, path: "/Images/artvedic12.jpeg" },
    //   { id: 8, path: "/Images/artvedic11.jpeg" },
    //   { id: 9, path: "/Images/artvedic13.jpeg" },
    // ];

    // useEffect(() => {
    //   fetchartworks();
    // }, []);
    // const allArtworks = async () => {
    //   const { data } = await fetchDatafromApi("/api/all-artworks?populate=*");
    //   setAllArtworks(data);
    // };
    // const uploadfile= async(event)=> {
    // const body= new FormData();
    // body.append("file", img);
    // const res=await fetch()

    // }
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-8 py-[48px]">
                <div className="relative h-[600px] border border-[#5C6B94] rounded p-[16px] ">
                    <div className="relative h-full">
                        <Image
                            className="rounded inset-[16px]"
                            src="/Images/artvedic17.jpeg"
                            alt="img1"
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-8 ">
                    <div className="relative">
                        <Image
                            className="rounded"
                            src="/Images/artvedic27.jpeg"
                            alt="img1"
                            layout="fill"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="relative">
                            <Image
                                className="rounded"
                                src="/Images/artvedic14.jpeg"
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
                    {category?.data?.slice(0, visiblecat).map((cat) => {
                        return (
                            <div
                                className="relative aspect-square"
                                key={`categoory-${cat.attributes.id}`}
                            >
                                <Link href={`/category/${cat.attributes.name}`}>
                                    <Image
                                        src={`${API_URL}${cat.attributes.img.data.attributes.url}`}
                                        alt="imagebrowse"
                                        layout="fill"
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center justify-between">
                    <h3
                        className="text-[#F7F8F8] cursor-pointer font-bold"
                        onClick={handleviewmorecat}
                    >
                        VIEW MORE
                    </h3>
                    <h3
                        className="text-[#F7F8F8] cursor-pointer font-bold"
                        onClick={handleviewlesscat}
                    >
                        VIEW LESS
                    </h3>
                </div>
            </div>
            <div className="py-[48px]">
                <h3 className="text-[#F7F8F8] pb-[16px] ">ALL ARTWORKS</h3>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
                >
                    <Masonry gutter="24px">
                        {products?.data?.slice(0, visible).map((artwork) => {
                            return (
                                <Productcard
                                    key={`allartwork-${artwork.id}`}
                                    artwork={artwork}
                                />

                                // <Image
                                //   onClick={() => {
                                //     router.push("productitems");
                                //   }}
                                //   key={`allartwork-${artwork.id}`}
                                //   className="w-full h-auto border rounded-lg shadow dark:border-gray-500"
                                //   src={`${API_URL}${artwork.attributes.img.data.attributes.url}`}
                                //   alt="imagebrowse5"
                                //   width={0}
                                //   height={0}
                                //   sizes="100vw"
                                // />
                            );
                        })}
                        <h3
                            className="text-[#F7F8F8] py-[12px] cursor-pointer font-bold"
                            onClick={handleviewmore}
                        >
                            VIEW MORE
                        </h3>
                        <h3
                            className="text-[#F7F8F8] py-[12px] cursor-pointer font-bold"
                            onClick={handleviewless}
                        >
                            VIEW LESS
                        </h3>
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <h3 className="text-[#F7F8F8] pb-[16px] ">AVAILABLE WORKSHOPS</h3>
            <div>
                <Carousel
                    itemClass="carouselItem"
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    infiniteLoop={true}
                    beforeChange={() => setIsMoving(true)}
                    afterChange={() => setIsMoving(false)}
                >
                    {workshop?.data?.map((workshop) => {
                        return (
                            <div
                                className="relative aspect-square"
                                key={`categoory-${workshop.id}`}
                            >
                                <Image
                                    draggable={false}
                                    onClick={(e) => {
                                        if (!isMoving)
                                            router.push({
                                                pathname: "/workshopdashboard",
                                                query: {
                                                    workshop:
                                                        JSON.stringify(
                                                            workshop
                                                        ),
                                                },
                                            });
                                    }}
                                    key={`category-${workshop.id}`}
                                    className="w-full h-auto "
                                    src={`${API_URL}${workshop.attributes.img.data.attributes.url}`}
                                    alt="imagebrowse5"
                                    layout="fill"
                                    sizes="100vw"
                                />
                            </div>
                        );
                    })}
                </Carousel>
                <div>
                    {/* <input type="file" id="myFile" name="filename"/>
  <button type="submit" className="bg-white border rounded " onClick={uploadfile}>Upload File</button> */}
                </div>
            </div>
        </div>
    );
};
export default Featured;
