import IMAGES_CONSTANT from "@/constants/image.constant";
import Image from "next/image";
import React from "react";

export default function OurJourney() {
  return (
    <article className="flex justify-between flex-col-reverse lg:flex-row items-center">
      <div className="lg:max-w-[45%] mt-5 md:mt-8 xl:mt-5 md:mr-4">
        <h4 className="font-semibold text-xl md:text-[28px] mb-2 md:mb-4 xl:mb-7">
          Our Journey
        </h4>
        <p className="text-base md:text-lg font-normal md:leading-[30px] text-about-us-description">
          At <span className="text-about-us-highlight">Aulancer</span>, our
          journey began with a shared passion for technology and a desire to
          make a difference. Founded by three dedicated individuals, Malvino
          Austin Tanura, Jovin Lidan, and James Kirawan, our company emerged
          from a common vision: to create innovative software and technology
          solutions that transform businesses and improve lives.
        </p>
        <p className="text-base md:text-lg font-normal md:leading-[30px] text-about-us-description mt-4 xl:mt-8">
          Our story is one of collaboration, determination, and a relentless
          pursuit of excellence. We started with a simple idea: that technology
          could solve complex problems and enhance the way people work, connect,
          and live. With this vision as our guide, this has brought us to where
          we are today.
        </p>
      </div>
      <ImageComp />
    </article>
  );
}

function ImageComp() {
  return (
    <div className="relative bg-red-100 h-fit w-fit">
      <Image
        src={IMAGES_CONSTANT.circleDecoration2}
        width={64}
        height={64}
        loading="lazy"
        alt="decor-2"
        className="absolute -top-5 -left-7 z-about-us-image-decoration rotate-[35deg] max-md:w-[40px] max-md:h-[40px] max-md:-top-3 max-md:-left-4"
      />
      <Image
        src={IMAGES_CONSTANT.circleDecoration}
        width={32}
        height={32}
        loading="lazy"
        alt="decor-1"
        className="absolute -bottom-5 left-[50%] z-about-us-image-decoration rotate-[35deg] max-md:w-[20px] max-md:h-[20px] max-md:-bottom-3"
      />
      <Image
        src={IMAGES_CONSTANT.ourJourney}
        alt="our-journey"
        width={575}
        height={473}
        loading="lazy"
        className="relative z-about-us-image "
      />
    </div>
  );
}
