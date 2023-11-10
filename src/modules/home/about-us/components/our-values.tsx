"use client";
import IMAGES_CONSTANT from "@/constants/image.constant";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function OurValues() {
  const articleRef = useRef(null);
  const isInView = useInView(articleRef, { once: true });
  return (
    <article
      className={clsx(
        "flex justify-between flex-col-reverse lg:flex-row-reverse items-center mt-20 transition-all duration-1000 ease-in-out",
        isInView ? "translate-x-0 opacity-100" : "-translate-x-1/3 opacity-0"
      )}
      ref={articleRef}
    >
      <div className="lg:max-w-[45%] mt-5 md:mt-8 xl:mt-5 md:mr-4">
        <h4 className="font-semibold text-xl md:text-[28px] mb-2 md:mb-4 xl:mb-7">
          Our Values
        </h4>
        <p className="text-base md:text-lg font-normal md:leading-[30px] text-about-us-description">
          At the core of Aulancer are our values. We believe in the power of
          Dedication, Reputation, Results, Innovation, Collaboration, and
          Adaptability. These values shape everything we do.
        </p>
        <p className="text-base md:text-lg font-normal md:leading-[30px] text-about-us-description mt-4 xl:mt-8">
          Dedication drives us to give our all to every project. Reputation is
          the cornerstone of our trustworthiness and integrity. Results are what
          we strive for with every line of code we write. Innovation fuels our
          creativity, and collaboration is the key to our success. Adaptability
          ensures we remain at the forefront of an ever-evolving industry.
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
        className="absolute -bottom-8 left-[16%] z-about-us-image-decoration rotate-[35deg] max-md:w-[40px] max-md:h-[40px] max-md:-bottom-3"
      />
      <Image
        src={IMAGES_CONSTANT.circleDecoration}
        width={32}
        height={32}
        loading="lazy"
        alt="decor-1"
        className="absolute -top-3 -right-3 z-about-us-image-decoration rotate-[35deg] max-md:w-[20px] max-md:h-[20px] max-md:-top-2 max-md:-right-1"
      />
      <Image
        src={IMAGES_CONSTANT.ourValues}
        alt="our-values"
        width={575}
        height={473}
        loading="lazy"
        className="relative z-about-us-image"
      />
    </div>
  );
}
