'use client'
import React from "react";
import Card from "../card/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { products } from "@/constants";
import Autoplay from "embla-carousel-autoplay"

export function TopProducts() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 1500,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
        
      ]} 
    >
      <CarouselContent className="-ml-12">
        {
          products.map(({ name, path }) => (
            <CarouselItem key={name} className=" md:basis-1/3 lg:ml-12 lg:basis-1/4 "> 
            <div className="relative w-full p-2 sm:w-[300px] md:w-[350px]"> 
                <Card path={path} title={name} />  
            </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="text-white max-sm:hidden"/>
      <CarouselNext className="text-white max-sm:hidden"/>
    </Carousel>
  );
}
