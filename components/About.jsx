import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#1E2433]">
      
       <div>
     
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <div className="grid grid-rows-3 justify-between  text-white">
            <div className=" h-max   rounded-lg   animate-fadeinright   ">
              <h1 className="text-[28px] px-5 ">Introduction</h1>
              <p className="text-justify  px-5 pt-2">
                Welcome to Artvedic, where art comes to life in vibrant colors
                and diverse forms. We are not just a platform; we're like a big
                family that loves all kinds of art. Whether it's paintings,
                drawings, or something totally new, we've got it. We're here to
                show off amazing art from artists all around. It's not just
                about buying; it's about having fun, exploring, and finding art
                that makes you go "wow!" Join us in this awesome adventure where
                art is like a big, colorful story waiting for you to discover.
                It's not just pictures; it's a whole world of imagination and
                fun. Come on in and let's make art a big, happy part of your
                day!
              </p>
            </div>
            <div className=" h-max  rounded-lg mt-4  animate-fadeinright">
              <h1 className="text-[28px] px-5 ">Our Goals and Mission</h1>
              <p className="text-justify px-5 pt-2">
                Our goal for the art website is to inspire creativity and
                support artists while celebrating diverse forms of art from
                around the world. We aim to make art accessible, engaging, and
                educational for everyone, fostering a welcoming community that
                connects people who share a passion for artistic expression. By
                providing a platform for artists to showcase their work and
                offering resources that enhance art appreciation, we strive to
                have a positive impact on the art world and society at large,
                making art a unifying and transformative force for individuals
                and communities alike.
              </p>
              </div>
             <div> <p className="text-justify px-5 pt-2">
                Artvedic is more than just a place to buy art—it's like a
                big, friendly club for artists and people who love art. We want
                to show off all kinds of cool art and help new artists get
                noticed. Our goal is to make the art world a fun and welcoming
                place where everyone can enjoy and be a part of something
                creative. Come join us as we make art more awesome for everyone!
              </p>
            </div>
          </div>
        </div>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 800: 2 }}
          >
            <Masonry gutter="24px">
              <Image
                className="w-full h-auto animate-fadeinup"
                src="/about1.jpg"
                alt="imagebrowse3"
                width={0}
                height={0}
                sizes="100vw"
              />
              <Image
                className="w-full h-auto animate-fadeinup"
                src="/about2.jpg"
                alt="imagebrowse3"
                width={0}
                height={0}
                sizes="100vw"
              />
               <Image
                className="w-full h-auto animate-fadeinup"
                src="/about3.jpg"
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
      <hr />
      <h1 className='text-white text-6xl text-center'>Developed By:</h1>
      <div className='grid grid-rows-3 justify-between gap-4'>
<div className='mt-[100px] '>
    <div className='grid grid-cols-2'>
      <div>
        <h1 className='text-white text-4xl'>Satya Bhattarai</h1>
        <p className='text-white text-2xl'> frontend developer </p>
        <p className='text-white text-2xl'> Contact No.0000 <br />Email xxxxxxxxx</p>
      </div>
      <div>
      <div className='relative w-32 h-32 '>
                    <Image
                    className=' max-w-full  rounded-full  overflow-hidden ml-[650px]'
                    src='/about1.jpg'
                    layout="fill"
                    objectFit="cover"
                    sizes="100vw"
                 ></Image>
                 </div>
      </div>
      </div>
</div>
<div className='grid grid-cols-2 mt-10'>
      <div>
        <h1 className='text-white text-4xl'>Subidha Acharya</h1>
        <p className='text-white text-2xl'> frontend developer </p>
        <p className='text-white text-2xl'> Contact No.0000 <br />Email xxxxxxxxx</p>
      </div>
      <div>
      <div className='relative w-32 h-32 '>
                    <Image
                    className=' max-w-full  rounded-full  overflow-hidden ml-[650px]'
                    src='/about1.jpg'
                    layout="fill"
                    objectFit="cover"
                    sizes="100vw"
                 ></Image>
                 </div>
      </div>
      </div>
      <div className='grid grid-cols-2'>
      <div>
        <h1 className='text-white text-4xl'>Sabin Manandhar</h1>
        <p className='text-white text-2xl'> frontend developer </p>
        <p className='text-white text-2xl'> Contact No.0000 <br />Email xxxxxxxxx</p>
      </div>
      <div>
      <div className='relative w-32 h-32 '>
                    <Image
                    className=' max-w-full  rounded-full  overflow-hidden ml-[650px]'
                    src='/about1.jpg'
                    layout="fill"
                    objectFit="cover"
                    sizes="100vw"
                 ></Image>
                 </div>
      </div>
      </div>
      </div>
    </div>
   
    
    
    
  );

};
export default About;
