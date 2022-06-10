import {
  BusinessCenter,
  Explore,
  Group,
  OndemandVideo,
} from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";

function home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          {/*for using layout="fill" we need a parent "relative" div with height and width*/}

          <Image
            src="https://rb.gy/vtbzlp"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* main container */}

        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            {/* Passing material UI Icon component */}
            <HeaderLink Icon={Explore} text="Discover" />
            <HeaderLink Icon={Group} text="People" />
            <HeaderLink Icon={OndemandVideo} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default home;
