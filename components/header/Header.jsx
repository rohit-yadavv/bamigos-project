import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-backgroundBlue  p-3 text-white opacity-95 sm:px-12 sm:py-4">
      <Link href="/">
        <Image src="/assets/logo/logo.png" width={150} height={80} alt="logo" />
      </Link>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
