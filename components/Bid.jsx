import { useEffect, useState } from "react";

import React from "react";
import { fetchDatafromApi } from "utils/api";
import { useSession } from "next-auth/react";

const Artist = () => {
  const [requests, setRequests] = useState([]);
  const [actionsText, setActionsText] = useState({});

  const { data: session } = useSession();
  useEffect(() => {
    const artistEmail = session?.user.email || "undefined";

    async function getRequests() {
      // api result is a Promise waiting for data to be fetched from server
      const apiResult = await fetchDatafromApi(
        `/api/requests?populate=*&filters[bid_to_artist][$eq]=${artistEmail}`
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
    <div className="mt-12">
      <h1 className="mb-8 text-2xl text-white">Bid Requests</h1>
      <div>
        <table className="min-w-full text-left text-black bg-white rounded table-auto">
          <thead className="font-medium border-b">
            <tr>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Bid Price</th>
              <th className="px-6 py-4">Bid By</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests?.data?.map((request, idx) => {
              return (
                <tr key={`request-${idx}`}>
                  <td className="px-6 py-4">{request.attributes.name}</td>
                  <td className="px-6 py-4">{request.attributes.price}</td>
                  <td className="px-6 py-4">{request.attributes.bid_by}</td>
                  <td className="px-6 py-4">
                  {console.log(actionsText)}
                    {!actionsText || !actionsText[idx] ? (
                      <>
                        <button
                          onClick={() => {
                            let newActionsText = {...actionsText};
                            newActionsText[idx] = 1;
                            setActionsText(newActionsText);
                          }}
                          className="px-8 py-2 bg-green-400 rounded"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            let newActionsText = {...actionsText};
                            newActionsText[idx] = -1;
                            setActionsText(newActionsText);
                          }}
                          className="px-8 py-2 ml-4 bg-red-400 rounded"
                        >
                          Reject
                        </button>
                      </>
                    ) :
                      actionsText[idx] === 1 ? "Accepted" : "Rejected"
                    }
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
