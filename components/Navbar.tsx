import React from "react";
import Image from "next/image";
import Searchinput from "./Searchinput";
import Navitems from "./Navitems";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        <div className="flex items-center gap-2">
          <Image
            src={"/LinkedIn_icon.svg.png"}
            alt="logo"
            width={35}
            height={35}
          />
          <div className="md:block hidden">
            <Searchinput />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="md:block hidden">
            <Navitems />
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button className="rounded-full" variant={"secondary"}>
                <SignInButton />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
