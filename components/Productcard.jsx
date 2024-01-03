import { API_URL } from "utils/urls";
import { BsCartPlus } from "react-icons/bs";
import Image from "next/image";
import React from "react";
import { addToCart } from "store/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Productcard = ({ artwork }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    return (
        <div className="p-4 border border-slate-600 rounded-lg shadow dark:border-slate-900 dark:bg-slate-800">
            {artwork.attributes.img.data ? (
                <Image
                    onClick={() => {
                        router.push({
                            pathname: "/productitems",
                            query: { artwork: JSON.stringify(artwork) },
                        });
                    }}
                    key={`allartwork-${artwork.id}`}
                    className="w-full h-auto cursor-pointer"
                    src={`${API_URL}${artwork.attributes.img.data.attributes.url}`}
                    alt="imagebrowse5"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            ) : null}
            <div className="px-[4px] text-white">
                <h2 className="pb-[4px] pt-[16px] font-bold">
                    {artwork.attributes.name}
                </h2>
                <p className="py-[4px] text-lg text-gray-400">
                    {artwork.attributes.description}
                </p>

                <div className="flex items-center justify-between py-4">
                    <div className="text-xl mb-[10px]">
                        &#8360; {artwork.attributes.price}
                    </div>
                    <button
                        className="px-4 py-2 mr-4 text-white border border-white rounded"
                        onClick={() => dispatch(addToCart(artwork))}
                    >
                        <BsCartPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Productcard;
