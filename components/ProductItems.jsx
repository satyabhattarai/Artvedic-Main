import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";

import { API_URL } from "utils/urls";
import Image from "next/image";
import KhaltiCheckout from "khalti-checkout-web";
import { addToCart } from "store/cartSlice";

const ProductItems = (props) => {



  let khaltiConfig = {
    publicKey: "myPublicKey",
    productIdentity: "Artworks",
    productName:"artwork.attributes.name",
    productUrl: "localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        console.log("Success: " + payload);
      },
      onError(error) {
        console.log(error);
      },
      onClose() {
        console.log("Widget is closing");
      },
    },
    paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS"],
  };

const [checkout, setCheckout] = useState(null);
useEffect(() => {
  //create khalti checkout and calculate total price when cart changes
  const checkout = new KhaltiCheckout(khaltiConfig);
  setCheckout(checkout);
}, []);
  const router = useRouter();
  const dispatch = useDispatch();
  let artwork = {};
  if (props.router.query.artwork) {
    //props.router.query thiyo I removed props
    artwork = JSON.parse(props.router.query.artwork) || null;
  } else {
    return <p>Image not clicked</p>;
  }
  console.log(artwork);
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-8 mt-[48px]">
        <div className="bold text-[16px] text-white text-justify ">
          <div className="">
            <p
              onClick={() => {
                router.push({
                  pathname: "artist_profile",
                  query: { artist: artwork.attributes.artist },
                });
              }}
            >
              Artist Profile
              <br />
              {artwork.attributes.artist}
            </p>
          </div>
          <div className="mb-[140px] mt-[48px]">
            {artwork.attributes.description}
          </div>
          <div className="max-w-[255px]">
            <div className="flex items-center justify-between">
              <h5 className="mb-[4px]">{artwork.attributes.name}</h5>
              <span className="mb-[4px]">TOTAL</span>
            </div>
            <div className="flex items-center justify-between mb-[24px]">
              <span className="">2023</span>
              <span className="text-red-600">
                &#8360; {artwork.attributes.price}
              </span>
            </div>
            <div className="text-black mb-[12px]">
              <h3 className="text-white mb-[8px]">Bid The Artwork</h3>
              <input
                className=" text-center text-[#5C6B94] bg-transparent border border-[#5C6B94] py-[2px] px-[8px] "
                defaultValue="5000"
                type="number"
                step={2000}
              ></input>
            </div>
            <div className="flex items-center justify-between mb-[16px]">
              <button className="border border-[#5C6B94] px-[16px] py-[4px]  text-white bg-gradient-to-r from-[#0F131B] to-transparent">
                BID NOW
              </button>
              <button
                onClick={() => {
                  checkout.show({ amount:  artwork.attributes.price *100 });
                }}
                className="border border-[#5C6B94] px-[16px] py-[4px] bg-gradient-to-r from-[#0F131B] to-transparent"
              >
                BUY NOW
              </button>
            </div>
            <button
              onClick={() => {
                dispatch(addToCart("product1"));
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div>
          <Image
            className="border rounded-s border-[#5C6B94] p-[16px]"
            src={`${API_URL}${artwork.attributes.img.data.attributes.url}`}
            alt="Product Item"
            width={627}
            height={727}
          />
        </div>
      </div>
      <div className="mt-[76px]">
        <h5 className="text-white mb-[18px]">GIVE REVIEWS</h5>
        <textarea
          className="w-[1092px] h-[125px] pl-[12px] pt-[4px] bg-transparent border border-[#5C6B94] text-[#5C6B94]"
          placeholder="Leave a Review"
        ></textarea>
      </div>
      <div className="mt-4 text-white">REVIEWS</div>
      <h5 className="mt-2 text-white">{artwork.attributes.review}</h5>
    </Fragment>
  );
};

export default withRouter(ProductItems);
