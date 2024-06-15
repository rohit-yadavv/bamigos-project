"use client";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  // const { mode, setMode } = useTheme();
  const { mode } = useTheme();
  return (
    <Menubar className="relative m-0 hidden border-none bg-transparent  p-0 shadow-none sm:block">
      <MenubarMenu>
        <MenubarTrigger className="bg-backgroundBlue">
          {mode === "light" ? (
            <Image
              className="active-theme cursor-pointer"
              src="/assets/icons/sun.svg" 
              alt="sun"
              width={25}
              height={25}
            />
          ) : mode === "dark" ? (
            <Image
              className="active-theme cursor-pointer"
              src="/assets/icons/moon.svg"
              alt="moon"
              width={20}
              height={20}
            />
          ) : (
            <Image
              className="active-theme cursor-pointer"
              src="/assets/icons/computer.svg"
              alt="moon"
              width={25}
              height={25}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute min-w-[120px] rounded border border-none bg-backgroundBlue  ">
          {themes.map((item) => (
            <MenubarItem
              className="flex cursor-pointer items-center gap-4 bg-backgroundBlue dark:focus:opacity-50"
              key={item.value}
              // onClick={() => {
              //   setMode(item.value);
              //   if (item.value !== "system") {
              //     localStorage.theme = item.value;
              //   } else {
              //     localStorage.removeItem("theme");
              //   }
              // }}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && "active-theme"}`}
              />
              <p
                className={` text-white ${
                  mode === item.value
                    ? "text-primary"
                    : "text-black dark:text-white"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Theme;
