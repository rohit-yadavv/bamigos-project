"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageCarousel({ setImage, setVideo }) {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs max-sm:hidden"
      >
        <CarouselContent className="-mt-1 h-[400px]">
          <CarouselItem className="h-full pt-1 md:basis-1/6">
            <div className="p-1">
              <div
                className="h-[80px] w-[100px] cursor-pointer bg-black"
                onClick={() => setVideo(true)}
              >
                <iframe
                  width="100"
                  height="80"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  allowFullScreen
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </div>
          </CarouselItem>

          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className="h-full pt-1 md:basis-1/6">
              <div className="p-1">
                <Image
                  width={100}
                  className="cursor-pointer"
                  onClick={() => {
                    setImage(index + 1);
                    setVideo(false);
                  }}
                  height={80}
                  src={`/assets/images/metablaster/${index + 1}.jpg`}
                  alt={`Image ${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-accentPink" />
        <CarouselNext className="text-accentPink" />
      </Carousel>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="w-full max-w-xs sm:hidden"
      >
        <CarouselContent className="-mt-1 h-[300px]">
          <CarouselItem className="pt-1 max-sm:basis-1/3">
            <div className="p-1">
              <div
                className="h-[100x] w-[70] cursor-pointer bg-black"
                onClick={() => setVideo(true)}
              >
                <iframe
                  width="100"
                  height="70"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  allowFullScreen
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </div>
          </CarouselItem>
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 max-sm:basis-1/3">
              <div className="p-1">
                <Image
                  width={100}
                  className="h-[70px] w-[100px] cursor-pointer rounded"
                  onClick={() => {
                    setImage(index + 1);
                    setVideo(false);
                  }}
                  height={80}
                  src={`/assets/images/metablaster/${index + 1}.jpg`}
                  alt="s"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-px top-[35px] text-accentPink" />
        <CarouselNext className="right-px top-[35px] text-accentPink" />
      </Carousel>
    </>
  );
}
