import Image from "next/image";
import { Link } from "react-router-dom";
import React from "react";
import { useRouter } from "next/router";

const UploadForm = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div class="relative min-h-screen flex items-center justify-center ">
          <div class=" w-full p-10 bg-[#1E2433] rounded-xl z-10">
            <div class="text-center">
              <h2 class="mt-5 text-3xl font-bold text-gray-200">
                UPLOAD YOUR ART!
              </h2>
              <p class="mt-2 text-sm text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <form class="mt-8 space-y-3" action="#" method="POST">
              <div class="grid grid-cols-1 space-y-2">
                <label class="text-sm font-bold text-gray-500 tracking-wide">
                  Product Name
                </label>
                <input
                  class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Name Your Art (eg: Oil Painting)"
                />
                <label class="text-sm font-bold text-gray-500 tracking-wide">
                  Description
                </label>
                <textarea
                  class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Describe your Art in short"
                />
                <label class="text-sm font-bold text-gray-500 tracking-wide">
                  Price
                </label>
                <input
                  class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Set Price"
                />
              </div>
              <div class="grid grid-cols-1 space-y-2">
                <label class="text-sm font-bold text-gray-500 tracking-wide">
                  Attach Document
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div class="h-full w-full text-center flex flex-col items-center justify-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10"></div>
                      <p class="pointer-none text-gray-500 ">
                        <span class="text-sm">Drag and drop</span> files here{" "}
                        <br /> or
                        <a href="" id="" class="text-blue-600 hover:underline">
                          select a file
                        </a>
                        from your computer
                      </p>
                    </div>
                    <input type="file" class="hidden" />
                  </label>
                </div>
              </div>
              <p class="text-sm text-gray-300">
                <span>Upload Your Art</span>
              </p>
              <div>
                <button className="flex justify-center p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600">
                  Upload
                </button>
                <button
                  onClick={() => {
                    router.push("/artist");
                  }}
                  class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
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
