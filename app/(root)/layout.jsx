import Header from "@/components/header/Header"; 
import React from "react";

const Layout = ({children}) => {
  return (
    <main className="relative">
      <Header />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col bg-backgroundDarkBlue p-3 pb-6 pt-32 max-md:pb-14">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
      </section>
      </div> 
    </main>
  );
};

export default Layout; 
