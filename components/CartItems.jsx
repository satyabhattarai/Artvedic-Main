import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "utils/urls";
import Image from "next/image";
import KhaltiCheckout from "khalti-checkout-web";
import { removeFromCart } from "store/cartSlice";

const Cartitems = () => {
  const cart = useSelector((state) => state.cart); // get Cart from store(redux)
  const dispatch = useDispatch(); // used to call redux functions

  let khaltiConfig = {
    publicKey: "myPublicKey",
    productIdentity: "Artworks",
    // productName: cart.map((artwork) => artwork.attributes.name).join(),
    productName:"Artworks",
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
  const [grandTotalPrice, setGrandTotalPrice] = useState(0);

  useEffect(() => {
    //create khalti checkout and calculate total price when cart changes
    const checkout = new KhaltiCheckout(khaltiConfig);
    const grandTotalPrice = getGrandTotalPrice();
    setGrandTotalPrice(grandTotalPrice);
    setCheckout(checkout);
  }, [cart]);

  const getGrandTotalPrice = () => {
    const initialPrice = 0;

    const totalPrice = cart.reduce((accumulator, currentValue) => {
      return (
        accumulator + currentValue.quantity * currentValue.attributes.price
      );
    }, initialPrice);
    return totalPrice;
  };
  return (
    <div>
      <div className="grid grid-cols-2 mt-[40px] gap-[133px]">
        <div className="grid grid-cols-1 gap-8">
          {!cart || cart.length === 0 ? (
            <h1 className="mb-8 text-2xl text-white">Your Cart is Empty.</h1>
          ) : (
            cart.map((artwork) => (
              <div className="grid grid-cols-2" key={`cartItems-${artwork.id}`}>
                <div className="rounded-sm">
                  <Image
                    className="rounded-sm py-[16px] px-[16px] border"
                    src={`${API_URL}${artwork.attributes.img.data.attributes.url}`}
                    alt="img1"
                    width={256}
                    height={320}
                  />
                </div>
                <div className="grid grid-rows-2 pl-[20px]">
                  <div className="font-semibold text-white">
                    {artwork.attributes.name}
                  </div>
                  <div className="flex items-end self-end justify-between text-white">
                    <div>
                      <p className="text-gray-300">
                        {artwork.quantity} x {artwork.attributes.price}
                      </p>
                      <p>{artwork.quantity * artwork.attributes.price}</p>
                    </div>
                    <button
                      className="text-red-500"
                      onClick={() => dispatch(removeFromCart(artwork.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-white">
          Grand Total
          <span className="text-sm text-white/[0.67] pl-[12px]">
            {grandTotalPrice}
          </span>
          <p>
            {grandTotalPrice > 0 && (
              <button
                className="border px-[16px] py-[4px] text-sm mt-[10px]"
                onClick={() => {
                  checkout.show({ amount: grandTotalPrice * 100 });
                }}
              >
                COMPLETE ORDER
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
