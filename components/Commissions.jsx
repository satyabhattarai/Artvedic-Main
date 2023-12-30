import React, { useEffect, useState } from "react";

import { API_URL } from "utils/urls";
import Image from "next/image";
import Productcard from "./Productcard";
import { fetchDatafromApi } from "utils/api";
import { useSession } from "next-auth/react";

const Commissions = () => {
  const [requests, setRequests] = useState([]);
  const [actionsText, setActionsText] = useState(null);

  const { data: session } = useSession();
  useEffect(() => {
    const artistEmail = session?.user.email || "undefined";
    console.log(artistEmail);
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
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {requests?.data?.map((request,index) => {
        return (
          <div key={index} className="text-white">
            <h1>{request.attributes.name}</h1>
           {request.attributes.img.data && <Image
              src={`${API_URL}${request.attributes.img.data?.attributes.url}`}
              alt="img"
              width={38}
              height={38}
            />}
          </div>
        );
      })}
    </div>
  );
};

export default Commissions;
