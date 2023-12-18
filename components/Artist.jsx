import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchDatafromApi } from "utils/api";
import { useRouter } from "next/router";

const Artist = () => {
  const router = useRouter();
  // const [artistWorks, setArtistWorks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [actionsText, setActionsText] = useState(null);
  // useEffect(() => {
  //   const artist = router.query.artist || "undefined";
  //   async function getArtistWorks() {
  //     // api result is a Promise waiting for data to be fetched from server
  //     const apiResult = await fetchDatafromApi(
  //       `/api/all-artworks?populate=*&filters[price][$eq]=${price}`
  //     );
  //     return apiResult;
  //   }
  //   getArtistWorks()
  //     .then((res) => {
  //       setArtistWorks(res);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  useEffect(() => {
    const artist = "satya";
    async function getRequests() {
      // api result is a Promise waiting for data to be fetched from server
      const apiResult = await fetchDatafromApi(
        `/api/requests?populate=*&filters[artist][$eq]=${artist}`
      );
      return apiResult;
      console.log(apiResult);
    }
    getRequests()
      .then((res) => {
        setRequests(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-12">
      {/* <div>
        <div className="text-white sidebar">
          <div className="subject-nav-form">
            <ul className=" subject-nav-list">
              <li>
                <h6 className="mb-8 text-xl ">
                  <a href="#selling-products">Sales</a>
                </h6>
              </li>
              <li>
                <h6 className="mb-8 text-xl ">
                  <a href="#bid-requests">Requests</a>
                </h6>
              </li>
              <li>
                <h6 className="text-xl ">
                  <a href="#total-earned">Total Earned</a>
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <div className="block">
        <div>
          <section>
            <div className="w-full">
              <section
                className="text-black bg-white input-section"
                id="sellling-products"
              >
                <h1 className="mb-4 font-bold">SELLING PRODUCTS</h1>
                <div>
                  <table className="w-full">
                    <tbody className="border-b-2 border-gray-200 bg-gray-50">
                      <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Productnumber
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Details
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Date
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Status
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Price
                        </th>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 text-sm text-gray-700 ">
                          <a href="#">1001</a>
                        </td>
                        <td>Abstract Art Made Using Oil Painting.</td>
                        <td>16/18/2021</td>
                        <td>Delivered</td>
                        <td>Rs.25000</td>
                      </tr>
                      <tr className="bg-[#e7cc5f] ">
                        <td className="p-3 text-sm text-black ">
                          <a href="#">1002</a>
                        </td>
                        <td className="p-3 text-sm text-black ">
                          Abstract Art Made Using Oil Painting.
                        </td>
                        <td className="p-3 text-sm text-black ">16/18/2021</td>
                        <td className="p-3 text-sm text-black ">shipped</td>
                        <td className="p-3 text-sm text-black ">Rs.25000</td>
                      </tr>
                      <tr className="bg-[#dc2626] opacity-75">
                        <td className="p-3 text-sm text-black ">
                          <a href="#">1003</a>
                        </td>
                        <td className="p-3 text-sm text-black ">
                          Abstract Art Made Using Oil Painting.
                        </td>
                        <td className="p-3 text-sm text-black">16/18/2021</td>
                        <td className="p-3 text-sm text-black">Cancelled</td>
                        <td className="p-3 text-sm text-black">Rs.25000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div>
          <section
            className="mt-4 text-black bg-white input-section"
            id="bid-requests"
          >
            <h1 className="mb-4 font-bold">BID REQUESTS</h1>
            <table className="w-full">
              <tbody className="border-b-2 border-gray-200 bg-gray-50">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                    Product number
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Product Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    By
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Date(within)
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Type
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Expected Price
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Actions
                  </th>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 ">
                    <a href="#">1001</a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    <a href="#">Flower</a>
                  </td>
                  <td>Abhishek Karki</td>
                  <td>16/18/2021</td>
                  <td>Acrylics</td>
                  <td>Rs.25000</td>
                  <td className="p-3 text-sm text-black">
                    <div className="flex gap-2">
                      <button className="border p-2 rounded hover:bg-[#bef264] bg-[#84cc16]">
                        Accept
                      </button>
                      <button className="border rounded hover:bg-[#f87171] p-2 bg-[#dc2626]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b-2">
                  <td className="p-3 text-sm text-gray-700 ">
                    <a href="#">1001</a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    <a href="#">Flower</a>
                  </td>
                  <td>Satya Bhattarai</td>
                  <td>16/18/2021</td>
                  <td>Acrylics</td>
                  <td>Rs.65000</td>
                  <td className="p-3 text-sm text-black">
                    <div className="flex gap-2">
                      <button className="border p-2 rounded hover:bg-[#bef264] bg-[#84cc16]">
                        Accept
                      </button>
                      <button className="border rounded hover:bg-[#f87171] p-2 bg-[#dc2626]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="p-3 text-sm text-gray-700 ">
                    <a href="#">1002</a>
                  </td>
                  <td className="p-3 text-sm text-black ">
                    <a href="#">Portrait</a>
                  </td>
                  <td className="p-3 text-sm text-black ">Binayak Parajuli</td>
                  <td className="p-3 text-sm text-black ">16/18/2021</td>
                  <td className="p-3 text-sm text-black ">Oil</td>
                  <td className="p-3 text-sm text-black ">Rs.25000</td>
                  <td className="p-3 text-sm text-black">
                    <div className="flex gap-2">
                      <button className="border p-2 rounded hover:bg-[#bef264] bg-[#84cc16]">
                        Accept
                      </button>
                      <button className="border rounded hover:bg-[#f87171] p-2 bg-[#dc2626]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="p-3 text-sm text-gray-700 ">
                    <a href="#">1003</a>
                  </td>
                  <td className="p-3 text-sm text-black ">
                    <a href="#">Smile</a>
                  </td>
                  <td className="p-3 text-sm text-black ">Sabin Manandhar</td>
                  <td className="p-3 text-sm text-black">16/18/2021</td>
                  <td className="p-3 text-sm text-black">Portrait</td>
                  <td className="p-3 text-sm text-black">Rs.25000</td>
                  <td className="p-3 text-sm text-black">
                    <div className="flex gap-2">
                      <button className="border p-2 rounded hover:bg-[#bef264] bg-[#84cc16]">
                        Accept
                      </button>
                      <button className="border rounded hover:bg-[#f87171] p-2 bg-[#dc2626]">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <div>
          <section>
            <div className="w-full">
              <section
                className="mt-4 text-black bg-white input-section"
                id="total-earned"
              >
                <h1 className="mb-4 font-bold">SELLING PRODUCTS</h1>
                <div>
                  <table className="w-full">
                    <tbody className="border-b-2 border-gray-200 bg-gray-50">
                      <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Productnumber
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          ProductName
                        </th>

                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Status
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">
                          Total Earned
                        </th>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 text-sm text-gray-700 ">
                          <a href="#">1001</a>
                        </td>
                        <td>Flower</td>
                        <td>Completed</td>
                        <td>Rs.25000</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm text-black ">
                          <a href="#">1003</a>
                        </td>
                        <td className="p-3 text-sm text-black ">Fursad</td>

                        <td className="p-3 text-sm text-black">Completed</td>
                        <td className="p-3 text-sm text-black">Rs.25000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div> */}
      <h1 className="mb-8 text-2xl text-white">Bid Requests</h1>
      <div>
        <table className="min-w-full text-left text-black bg-white rounded table-auto">
          <thead className="font-medium border-b">
            <tr>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Bid Price</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests?.data?.map((request, idx) => {
              return (
                <tr key={`request-${idx}`}>
                  <td className="px-6 py-4">{request.attributes.name}</td>
                  <td className="px-6 py-4">{request.attributes.price}</td>
                  <td className="px-6 py-4">
                    {!actionsText ? (
                      <>
                        <button
                          onClick={() => {
                            setActionsText("Accepted");
                          }}
                          className="px-8 py-2 bg-green-400 rounded"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            setActionsText("Rejected");
                          }}
                          className="px-8 py-2 ml-4 bg-red-400 rounded"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      actionsText
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Artist;
