import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const ArtistForm = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mt-24">
        <h1 className="mb-2 font-bold text-center text-gray-200">
          ARE YOU AN ARTIST?
        </h1>
        <h5 className="mb-24 text-center text-gray-400 text-muted">
          (Please fill out the form to continue)
        </h5>
        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Username
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="username"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-password"
              >
                TELL US ABOUT YOU
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Bio"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Butwal"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Province 1</option>
                  <option>Province 2</option>
                  <option>Province 3</option>
                  <option>Province 4</option>
                  <option>Province 5</option>
                  <option>Province 6</option>
                  <option>Province 7</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div>
        </form>
        <div className="upload-profile-picture-container">
          <Image
            src="/Images/artistprofile.webp"
            alt="image"
            width={32}
            height={32}
            sizes="100vw"
          />

          <div>
            <p className="text-white bold">
              DRAG AND DROP YOUR PROFILE PICTURE HERE TO UPLOAD.
            </p>
            <p className="text-gray-300 text-muted">
              ( File must be in .JPG, .PNG or .GIF format and not more than 4 MB
              )
            </p>
            <button className="px-3 py-2 text-black bg-green-200 border">
              Upload Picture
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => {
            router.push("uploadform");
          }}
          className="px-16 py-2 text-black hover:bg-cyan-500 bg-green-200 border"
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default ArtistForm;
