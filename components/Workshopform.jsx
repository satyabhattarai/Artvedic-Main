import React from "react";
import { postDatatoApi } from "utils/api";
import { uploadDatatoApi } from "utils/api";
import { useRouter } from "next/router";
import { useState } from "react";

const Workshopform = () => {
  const router = useRouter();
  const [files, setFiles] = useState();

  const [uploadedImage, setUploadedImage] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      //name price description & img (left ma vako strapi ma vako) (right ma vako form ma j name cha tei).
      name: e.target.name.value,
      description: e.target.description.value,
      img: uploadedImage,
      categories: e.target.category.value,
    };
    console.log(formData);
    try {
      const imageUploadResult = await uploadImage(e);
      console.log(imageUploadResult);
    } catch (error) {
      alert("Error uploading submitted image.");
      return;
    }

    try {
      const result = await postDatatoApi(
        "/api/workshops",
        JSON.stringify({ data: formData })
      );
      console.log(result);
      alert("Uploaded Sucessfully");
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
    } catch (error) {
      alert("could not upload file");
    }
  };
  return (
    <div>
      <div>
        <div className="relative flex items-center justify-center min-h-screen ">
          <div className=" w-full p-10 bg-[#1E2433] rounded-xl z-10">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-200">
                UPLOAD YOUR ART!
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <form className="mt-8 space-y-3" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 space-y-2">
                <label className="mb-2 text-sm font-bold tracking-wide text-gray-500">
                  {`ORGANIZTION NAME`}
                </label>
                <input
                  className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="name"
                  placeholder="Eg: Satya's Art, Artvedic , Artdevotion"
                />

                <label
                  htmlFor="art"
                  className="text-sm font-bold tracking-wide text-gray-500 "
                >
                  WORKSHOP CATEGORY
                </label>
                <select
                  className="p-2 text-base border-gray-300 rounded-lg bo2rder focus:outline-none focus:border-indigo-500"
                  name="category"
                  id="art"
                >
                  <option value="Acrylic">Acrylics</option>
                  <option value="Watercolor">Watercolor</option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Abstract">Abstract</option>
                  <option value="Glass Art">Glass Art</option>
                  <option value="Pixel Art">Pixel Art</option>
                </select>

                <label className="text-sm font-bold tracking-wide text-gray-500 ">
                  DESCRIPTION
                </label>
                <textarea
                  className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Describe your workshop in short"
                  name="description"
                />
              </div>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold tracking-wide text-gray-500">
                  ATTACH DOCUMENT
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full p-10 text-center border-4 border-dashed rounded-lg">
                    <div className="flex flex-col items-center justify-center w-full h-full text-center cursor-pointer ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-20 text-blue-400 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-gray-500 pointer-none ">
                        <span className="text-sm text-blue-500 underline ">
                          CHOOSE YOUR WORKSHOP FLYER HERE.
                        </span>
                      </p>
                      <input
                        type="file"
                        name="img"
                        onChange={(e) => setFiles(e.target.files)}
                        className="justify-center hidden mt-4 text-center text-gray-500"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="px-8 py-2 mt-4 text-white border cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshopform;
