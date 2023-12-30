import { API_URL } from "utils/urls";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Workshop = () => {
  const router = useRouter();
  let workshop = {};
  if (router.query.workshop) {
    //props.router.query thiyo I removed props
    workshop = JSON.parse(router.query.workshop) || null;
  }
  return (
    <div>
      <h1 className="mt-8 mb-8 text-4xl font-bold text-white">
        {workshop.attributes.name}
      </h1>
      <div className="grid grid-cols-2 p-8 mx-auto gap-9">
        <div>
          <Image
            className="border rounded-s border-[#5C6B94] p-[16px]"
            src={`${API_URL}${workshop.attributes.img.data.attributes.url}`}
            alt="Product Item"
            onChange={(e) => setFiles(e.target.files)}
            width={627}
            height={727}
          />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            {workshop.name || "Painting Workshop"}
          </h2>
          <p className="mb-4 text-gray-600">
            {workshop.attributes.description}
          </p>
          <p className="pb-8 text-gray-300 ">
            You can join the workshop when the organizer starts their meeting.
            Click the link below to join your workshop.
          </p>
          <a
            href={
              workshop.zoomLink ||
              "https://meet.google.com/ogt-ypft-bgw?pli=1&ijlm=1703890538693&adhoc=1&hs=187"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Join Workshop on Google Meet
          </a>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="p-6 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="mb-4 text-2xl font-semibold">{workshop.title}</h2>
              <p className="mb-4 text-gray-600">{workshop.description}</p>
              <a
                href={workshop.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Join Workshop on Zoom
              </a>
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default Workshop;
