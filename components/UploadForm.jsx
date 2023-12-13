import React from "react";
import { useRouter } from "next/router";

const UploadForm = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div className="relative min-h-screen flex items-center justify-center ">
          <div className=" w-full p-10 bg-[#1E2433] rounded-xl z-10">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-200">
                UPLOAD YOUR ART!
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <form className="mt-8 space-y-3" action="#" method="POST">
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Product Name
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Name Your Art (eg: Oil Painting)"
                />
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Description
                </label>
                <textarea
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Describe your Art in short"
                />
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Price
                </label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Set Price"
                />
              </div>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Attach Document
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
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
                      <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10"></div>
                      <p className="pointer-none text-gray-500 ">
                        <span className="text-sm">Drag and drop</span> files
                        here <br /> or
                        <a
                          href=""
                          id=""
                          className="text-blue-600 hover:underline"
                        >
                          select a file
                        </a>
                        from your computer
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                <span>Upload Your Art</span>
              </p>
              <div>
                <button className="flex justify-center p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600">
                  Upload
                </button>
                <button
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
