import { API_URL } from "utils/urls";
import Image from "next/image";
import React from "react";
import { postDatatoApi } from "utils/api";
import { uploadDatatoApi } from "utils/api";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Hireform = () => {
  const router = useRouter();
  const [files, setFiles] = useState();

  const [uploadedImage, setUploadedImage] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();



    var imageUploadResult = null;
    try {
       imageUploadResult = await uploadImage(e);
    } catch (error) {
      alert("Error uploading submitted image.");
      return;
    }
    const formData = {
      //strapi ko name price description & img left ma vako strapi ma vako right ma vako form ma j name cha tei.
      name: e.target.name.value,
      date: e.target.date.value,
      frame: e.target.frame.value,
      city: e.target.city.value,
      img: imageUploadResult,
      state: e.target.state.value,
      zip: e.target.zip.value,
      artist: router.query.artist,
      request_by: e.target.email.value,
    };
    console.log(formData);
    try {
      const result = await postDatatoApi(
        "/api/hires",
        JSON.stringify({ data: formData })
      );
      alert("Request sent to the artist");
    } catch (error) {
      alert("Error adding profile data.");
      return;
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", files[0]);

    try {
      const result = await uploadDatatoApi(formData);
      setUploadedImage(result[0].id);
      return result[0].id;
    } catch (error) {
      alert("could not upload file");
    }
  };
  return (
    <div className="mt-12">
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-first-name"
            >
              WHAT TYPE OF ART DO YOU WANT?
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-500 rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="name"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-last-name"
            >
              Your Email?
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-last-name"
            >
              WHEN DO YOU NEED YOUR ARTWORK?
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="date"
              placeholder="Time"
              name="date"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-password"
            >
              DO YOU NEED IT WITH FRAME OR WITHOUT FRAME?
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="yes/no"
              name="frame"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              name="city"
            />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="state"
              >
                <option>Province 1</option>
                <option>Province 2</option>
                <option>Province 3</option>
                <option>Province 4</option>
                <option>Province 5</option>
                <option>Province 6</option>
                <option>Province 7</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              name="zip"
            />
          </div>
        </div>
        <div className="upload-profile-picture-container">
          <Image
            src="/Images/ps7.jpeg"
            alt="image"
            width={32}
            height={32}
            sizes="100vw"
          />

          <div>
            <p className="text-white bold">
              DRAG AND DROP REFERENCE IMAGE HERE TO UPLOAD.
            </p>
            <p className="text-gray-300 text-muted">
              ( File must be in .JPG, .PNG or .GIF format and not more than 4 MB
              )
            </p>
            <input
              type="file"
              name="img"
              onChange={(e) => setFiles(e.target.files)}
              className="justify-center mt-4 text-center text-gray-500"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="px-8 py-2 mt-4 text-white border"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Hireform;
