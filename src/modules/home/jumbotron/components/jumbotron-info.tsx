import React from "react";

export default function JumbotronInfo() {
  return (
    <div>
      <div className="flex-1">
        <span className="text-5xl font-light">
          <span className="mr-4">Great</span>
          <span className="overflow-hidden inline-block h-[56px] align-middle ">
            <span className="bg-clip-text text-transparent bg-gradient-purple-text-1 font-bold inline-block h-36 mr-4 ">
              products
            </span>
          </span>
          <span>is</span>
          <br />
          <span className="text-gray-900 font-extrabold mr-4 leading-normal">
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
          <br />
          to bring your vision to life
        </span>
      </div>
    </div>
  );
}
