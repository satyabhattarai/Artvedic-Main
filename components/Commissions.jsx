import React, { useEffect, useState } from "react";

import { API_URL } from "utils/urls";
import Image from "next/image";
import { MdZoomIn } from "react-icons/md";
import Productcard from "./Productcard";
import { fetchDatafromApi } from "utils/api";
import { useSession } from "next-auth/react";

const Commissions = () => {
  const [requests, setRequests] = useState([]);
  const [actionsText, setActionsText] = useState(null);

  const { data: session } = useSession();
  useEffect(() => {
    const artistEmail = session?.user.email || "undefined";
    async function getRequests() {
      // api result is a Promise waiting for data to be fetched from server
      const apiResult = await fetchDatafromApi(
        `/api/hires?populate=*&filters[artist][$eq]=${artistEmail}`
      );
      return apiResult;
    }
    getRequests()
      .then((res) => {
        setRequests(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="mt-8 text-black">
      <table className="w-full text-left bg-white rounded">
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Reference Image</th>
            <th className="p-4">Date</th>
            <th className="p-4">Frame</th>
            <th className="p-4">City</th>
            <th className="p-4">State</th>
            <th className="p-4">ZIP</th>
            <th className="p-4">Request By</th>
          </tr>
        </thead>
        <tbody>
          {requests?.data?.map((request, index) => {
            return (
              <tr key={index}>
                <td className="p-4">{request.attributes.name}</td>
                <td className="p-4">
                  {request.attributes.img.data && (
                    <div className="flex gap-4">
                      <Image
                        src={`${API_URL}${request.attributes.img.data?.attributes.url}`}
                        alt="img"
                        width={120}
                        height={120}
                      />
                      <a
                        href={`${API_URL}${request.attributes.img.data?.attributes.url}`}
                        target="_blank"
                      >
                        <MdZoomIn className="text-red-500"/>
                      </a>
                    </div>
                  )}
                </td>
                <td className="p-4">{request.attributes.date}</td>
                <td className="p-4">{request.attributes.frame}</td>
                <td className="p-4">{request.attributes.city}</td>
                <td className="p-4">{request.attributes.state}</td>
                <td className="p-4">{request.attributes.zip}</td>
                <td className="p-4">{request.attributes.request_by}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Commissions;
