import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";

import { API_URL } from "utils/urls";
import Image from "next/image";
import KhaltiCheckout from "khalti-checkout-web";
import { addToCart } from "store/cartSlice";
import { postDatatoApi } from "utils/api";
import { useSession } from "next-auth/react";

const ProductItems = (props) => {
  const [checkout, setCheckout] = useState(null);
  const { data: session } = useSession();
  let khaltiConfig = {
    publicKey: "myPublicKey",
    productIdentity: "Artworks",
    productName: "artwork.attributes.name",
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
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      //strapi ko name price description & img left ma vako strapi ma vako right ma vako form ma j name cha tei.
      price: e.target.bidprice.value,
      bid_to_artist: artwork.attributes.artist,
      name: artwork.attributes.name,
      bid_by: session.user.email,
    };
    console.log(formData);
    try {
      const result = await postDatatoApi(
        "/api/requests",
        JSON.stringify({ data: formData })
      );
      console.log(result);
      alert("Bid Request Sent Successfully");
    } catch (error) {
      alert("Error bidding data.");
      return;
    }
  };

  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-8 mt-[48px]">
        <div className="bold text-[16px] text-white text-justify ">
          <div className="">
            <p
              type="text"
              name="artistname"
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
          <div className="mb-[140px] mt-[48px]" type="text" name="description">
            {artwork.attributes.description}
          </div>
          <div className="max-w-[255px]">
            <div className="flex items-center justify-between">
              <h5 className="mb-[4px] ">{artwork.attributes.name}</h5>
              <span className="mb-[4px]">TOTAL</span>
            </div>
            <div className="flex items-center justify-between mb-[24px]">
              <span className="">2023</span>
              <span className="text-red-600">
                &#8360; {artwork.attributes.price}
              </span>
            </div>
            {session && artwork.attributes.artist !== session.user.email && (
              <form onSubmit={onSubmit}>
                {" "}
                <div className="text-black mb-[12px]">
                  <h3 className="text-white mb-[8px]">Bid The Artwork</h3>
                  <input
                    className=" text-center text-[#5C6B94] bg-transparent border border-[#5C6B94] py-[2px] px-[8px] "
                    defaultValue={artwork.attributes.price}
                    type="number"
                    name="bidprice"
                    step={2000}
                  ></input>
                </div>
                <div className="flex items-center justify-between mb-[16px]">
                  <button
                    type="submit"
                    value="Submit"
                    className="border border-[#5C6B94] px-[16px] py-[4px]  text-white bg-gradient-to-r from-[#0F131B] to-transparent"
                  >
                    BID NOW
                  </button>

                  <button
                    onClick={() => {
                      checkout.show({ amount: artwork.attributes.price * 100 });
                    }}
                    className="border border-[#5C6B94] px-[16px] py-[4px] bg-gradient-to-r from-[#0F131B] to-transparent"
                  >
                    BUY NOW
                  </button>
                </div>
              </form>
            )}

            {session && artwork.attributes.artist !== session.user.email && (
              <button
                onClick={() => {
                  dispatch(addToCart("product1"));
                }}
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
        <div>
          <Image
            className="border rounded-s border-[#5C6B94] p-[16px]"
            src={`${API_URL}${artwork.attributes.img.data.attributes.url}`}
            alt="Product Item"
            onChange={(e) => setFiles(e.target.files)}
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
