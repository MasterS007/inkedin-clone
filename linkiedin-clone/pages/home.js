import {
  ArrowForwardIosRounded,
  BusinessCenter,
  Explore,
  Group,
  OndemandVideo,
} from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";

function home() {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>LinkiedIn App</title>
        <meta name="locale" content="en_US" />
        <link
          rel="icon"
          href="https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
        />
      </Head>

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

        {/* header container */}

        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            {/* Passing material UI Icon component */}
            <HeaderLink Icon={Explore} text="Discover" />
            <HeaderLink Icon={Group} text="People" />
            <HeaderLink Icon={OndemandVideo} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
          </div>
          <div className="pl-4">
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* main container */}

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        {/* left container */}
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
          </div>
        </div>

        {/* right container */}

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5 ">
          <Image src="https://rb.gy/vkzpzt" alt="LCP" layout="fill" priority />
        </div>
      </main>
    </div>
  );
}

export default home;
