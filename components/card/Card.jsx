import React from "react";
import "./card.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({path, title}) => {
  return (
    <Link href="/metablaster" class="card h-[300px] p-2"> 
      <b></b>
      <Image className="z-50" src={path} alt="s" width={250} height={230}/>
      <div class="content">
        <p class="title">
        {title}
          <br />
          <span></span>
        </p>
        <ul class="sci"></ul> 
      </div>
    </Link>
  );
};

export default Card;
