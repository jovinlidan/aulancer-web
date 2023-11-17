import React from "react";

export default function AboutUsTitle() {
  return (
    <div className="flex flex-col items-center max-md:mb-4 md:mb-14">
      <hr className="bg-gradient-service-text w-[40px] md:w-[69px] h-[5px]" />
      <h1 className="text-gray-900 text-center font-normal text-3xl lg:text-4xl mt-3">
        Come get to know
      </h1>
      <h1 className="text-gray-900 text-center font-bold text-3xl lg:text-4xl mt-1">
        About Us
      </h1>
    </div>
  );
}
