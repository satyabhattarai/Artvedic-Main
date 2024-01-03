import React from "react";
import { postDatatoApi } from "utils/api";
import { uploadDatatoApi } from "utils/api";
import { useRouter } from "next/router";
import { useState } from "react";

const UploadForm = () => {
    const router = useRouter();
    const [files, setFiles] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();

        var imageUploadResult = null;
        try {
            imageUploadResult = await uploadImage(e);
            const formData = {
                name: e.target.name.value,
                description: e.target.description.value,
                price: e.target.price.value,
                img: imageUploadResult,
                artist: e.target.artistname.value,
                categories: e.target.category.value,
            };
            try {
                const result = await postDatatoApi(
                    "/api/all-artworks",
                    JSON.stringify({ data: formData })
                );
                alert("Uploaded Sucessfully");
            } catch (error) {
                alert("Error adding profile data.");
                return;
            }
        } catch (error) {
            alert("Error uploading submitted image.");
            return;
        }
    };

    const uploadImage = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("files", files[0]);

        try {
            const result = await uploadDatatoApi(formData);
            return result[0].id;
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
                                <label className="text-sm font-bold tracking-wide text-gray-500">
                                    Your Name
                                </label>
                                <input
                                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    name="artistname"
                                    placeholder="Your Name"
                                />

                                <label
                                    htmlFor="art"
                                    className="text-sm font-bold tracking-wide text-gray-500"
                                >
                                    Category
                                </label>
                                <select
                                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    name="category"
                                    id="art"
                                >
                                    <option value="Acrylic">Acrylics</option>
                                    <option value="Watercolor">
                                        Watercolor
                                    </option>
                                    <option value="Oil Painting">
                                        Oil Painting
                                    </option>
                                    <option value="Portrait">Portrait</option>
                                    <option value="Abstract">Abstract</option>
                                    <option value="Glass Art">Glass Art</option>
                                    <option value="Pixel Art">Pixel Art</option>
                                </select>

                                <label className="text-sm font-bold tracking-wide text-gray-500">
                                    Product Name
                                </label>
                                <input
                                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    name="name"
                                    placeholder="Name Your Art (eg: Oil Painting)"
                                />
                                <label className="text-sm font-bold tracking-wide text-gray-500">
                                    Description
                                </label>
                                <textarea
                                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    placeholder="Describe your Art in short"
                                    name="description"
                                />
                                <label className="text-sm font-bold tracking-wide text-gray-500">
                                    Price
                                </label>
                                <input
                                    className="p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    placeholder="Set Price"
                                    name="price"
                                />
                            </div>
                            <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold tracking-wide text-gray-500">
                                    Attach Document
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col w-full p-10 text-center border-4 border-dashed rounded-lg">
                                        <div className="flex flex-col items-center justify-center w-full h-full text-center ">
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
                                                    CHOOSE YOUR ARTWORK HERE.
                                                </span>
                                            </p>
                                            <input
                                                type="file"
                                                name="img"
                                                onChange={(e) =>
                                                    setFiles(e.target.files)
                                                }
                                                className="justify-center mt-4 text-center text-gray-500"
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="px-8 py-2 mt-4 text-white border"
                                />
                            </div>
                            {/* this was input ko div mathi/// prev ui changed but not removed
                 <button className="flex justify-center p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600">
                  Upload
                </button> */}
                            {/* <div>
                  <input
                    type="file"
                    name="img"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadForm;
