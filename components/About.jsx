import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-16">
        <div>
          <div
            className="grid grid-rows-3 mt-8
            gap-[48px] text-white"
          >
            <div className="border border-transparent rounded-lg hover:border-white">
              <h1 className="text-[28px] text-center pt-4">Our mission</h1>
              <p className="px-4 pt-4 pb-4 text-center">
                satya bhattarai hello utsav hello sabin hello binayak hello
                shreeram hello abhishek hello sewan hello ishu hello bishal
              </p>
              <div className="text-center">
                <button className="px-4 py-1 border">Read more</button>
              </div>
            </div>
            <div className="border border-transparent rounded-lg hover:border-white ">
              <h1 className="text-[28px] text-center pt-4">goals</h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt sit illo asperiores dolor ex tempora voluptates omnis,
                cum non praesentium officiis iure atque amet, ullam repellendus.
                Fugiat aspernatur, deleniti delectus eum quis dignissimos magnam
                explicabo corporis assumenda, maiores perspiciatis pariatur
                doloremque provident est, culpa corruption.
              </p>
              <div className="text-center">
                <button className="px-4 py-1 mb-2 border">Read more</button>
              </div>
            </div>
            <div className="border border-transparent rounded-lg hover:border-white ">
              <h1 className="text-[24px] text-center pt-4">ssss</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                aspernatur soluta veritatis.
              </p>
            </div>
          </div>
        </div>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
          >
            <Masonry gutter="24px">
              <Image
                className="w-full h-auto"
                src="/bg_about.jpg"
                alt="imagebrowse5"
                width={0}
                height={0}
                sizes="100vw"
              />

              <Image
                className="w-full h-auto"
                src="/bg_about.jpg"
                alt="imagebrowse3"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className="w-full h-auto"
                src="/img5.jpeg"
                alt="imagebrowse3"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className="w-full h-auto"
                src="/img1.jpg"
                alt="imagebrowse3"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className="w-full h-auto"
                src="/img1.jpg"
                alt="imagebrowse3"
                width={0}
                height={0}
                sizes="100vw"
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};
export default About;
