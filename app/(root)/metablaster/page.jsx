"use client";
import { ImageCarousel } from "@/components/productPage/ImageCarousel";
import Navigation from "@/components/productPage/Navigation";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [image, setImage] = useState(1);
  const [video, setVideo] = useState(false); 

  return (
    <div>
      <Navigation name="metablaster" />
      <h1 className="pt-12 text-2xl text-white">metablaster</h1>
      <div className="flex flex-col-reverse justify-between gap-2 pt-6 sm:flex-row">
        <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:pt-6">
          <ImageCarousel setImage={setImage} setVideo={setVideo} /> 
        </div>
        <div className="flex items-center justify-center">
          {!video ? ( 
            <Image
              src={`/assets/images/metablaster/${image}.jpg`}
              alt="metablaster"
              className="rounded"
              width={900}
              height={500}
            />
          ) : (
            <iframe
            className="max-sm:size-full"
              width={900}
              height={500}
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
