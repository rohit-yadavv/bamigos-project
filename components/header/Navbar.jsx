import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3 bg-transparent font-buzinga text-sm text-white">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-backgroundBlue font-buzinga text-xs hover:opacity-50  sm:text-base">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" border-none bg-backgroundBlue p-3 text-white">
              <NavigationMenuLink className="bg-backgroundBlue">
                <div className="flex w-36 flex-row flex-wrap gap-2">
                  <Link className="hover:opacity-90" href="/"> Arcade Game Machine</Link>
                  <Link className="hover:opacity-90" href="/"> Arcade Game </Link>
                  <Link className="hover:opacity-90" href="/"> Vr Games </Link>
                  <Link className="hover:opacity-90" href="/"> Virtual Reality Box </Link>
                  <Link className="hover:opacity-90" href="/"> Game Machine </Link>
                  <Link className="hover:opacity-90" href="/"> Rental Services </Link>
                  <Link className="hover:opacity-90" href="/"> VR Racing Simulator </Link>
                  <Link className="hover:opacity-90" href="/"> Augmented Reality Solutions </Link>
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent font-buzinga text-xs hover:opacity-50 sm:text-base">
              AboutUs
            </NavigationMenuTrigger>
            <NavigationMenuContent className="border-none bg-backgroundBlue p-3 text-white">
              <NavigationMenuLink>
              <div className="flex w-36 flex-row flex-wrap gap-2">
                  <Link className="hover:opacity-90" href="/">  WHO WE ARE </Link>
                  <Link className="hover:opacity-90" href="/"> MISSION, VISION & VALUES </Link>
                  <Link className="hover:opacity-90" href="/"> CUSTOMERS REVIEWS </Link>
                  <Link className="hover:opacity-90" href="/"> JOIN THE TEAM </Link>
                  </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link className="hidden text-xs hover:opacity-50 sm:block sm:text-base" href="/">Contact Us</Link> 
      <Theme/>
    </div>
  );
};

export default Navbar;
