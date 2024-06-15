import { TopProducts } from "@/components/homepage/TopProducts";
import React from "react";

const page = () => {
  return (
    <div className="mb-20 h-screen w-full font-buzinga">
      {/* <Card /> */}
      <div >
      <h2 className="pb-2 text-center text-2xl text-white">Our Top Games</h2>
      <TopProducts />
      </div>
    </div>
  );
};

export default page;
