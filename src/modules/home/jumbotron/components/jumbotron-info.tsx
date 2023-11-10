"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function JumbotronInfo() {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <div
      ref={divRef}
      className={clsx(
        "max-lg:mb-8 transition-all duration-1000 ease-in-out",
        isInView ? "translate-x-0 opacity-100" : "-translate-x-1/3 opacity-0"
      )}
    >
      <div className="flex-1">
        <span className="text-5xl font-light max-md:flex max-md:flex-wrap max-md:leading-[70px]">
          <span className="mr-4">Great</span>
          <span className="overflow-hidden md:inline-block md:h-[56px] align-middle">
            <span className="bg-clip-text text-transparent  bg-gradient-purple-text-2 lg:bg-gradient-purple-text-1 font-bold md:inline-block md:h-36 mr-4">
              products
            </span>
          </span>
          is
          <span className="mr-2" />
          <br className="max-lg:hidden" />
          <span className="text-gray-900 font-extrabold mr-4 md:leading-normal">
            build by great
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-purple-text-2 font-extrabold inline-block">
            teams
          </span>
        </span>
      </div>
      <div className="mt-7">
        <span className="text-default leading-9">
          We help build and manage a team of world-class developers
          <span className="mr-2" />
          <br className="max-md:hidden" />
          to bring your vision to life
        </span>
      </div>
    </div>
  );
}
