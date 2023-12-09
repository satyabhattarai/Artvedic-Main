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
              <li className="nav-link">
                <h6 className="mb-8 text-xl ">Sales</h6>
              </li>
              <li className="nav-link">
                <h6 className="mb-8 text-xl ">Requests</h6>
              </li>
              <li className="nav-link">
                <h6 className="text-xl ">Total Earned</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <section className="text-black bg-white input-section">
          <h1 className="mb-4 font-bold">SELLING PRODUCTS</h1>
          <div>
            <table className="w-full">
              <thead className="border-b-2 border-gray-200 bg-gray-50">
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
              </thead>
              <tbody>
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
                    <a href="#">1001</a>
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
                    <a href="#">1001</a>
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
    </div>
  );
};

export default Artist;
