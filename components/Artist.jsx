import Image from "next/image";
import Link from "next/link";
import React from "react";

const Artist = () => {
  return (
    <div className="flex mt-12 gap-9">
      <div>
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
                  {" "}
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
      </div>
      <div className="block">
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
            className="text-black mt-4 bg-white input-section"
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
                className="text-black bg-white input-section mt-4"
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
                        <td className="p-3 text-sm text-black ">Jebin</td>

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
      </div>
    </div>
  );
};

export default Artist;
