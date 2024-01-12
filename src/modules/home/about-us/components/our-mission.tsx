"use client";
import IMAGES_CONSTANT from "@/constants/image.constant";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function OurMission() {
  const articleRef = useRef(null);
  const isInView = useInView(articleRef, { once: true });
  return (
    <article
      className={clsx(
        "flex justify-between flex-col-reverse lg:flex-row items-center mt-20 transition-all duration-1000 ease-in-out",
        isInView ? "translate-x-0 opacity-100" : "translate-x-1/3 opacity-0"
      )}
      ref={articleRef}
    >
      <div className="lg:max-w-[45%] mt-5 md:mt-8 xl:mt-5 md:mr-4">
        <h4 className="font-semibold text-xl md:text-[28px] mb-2 md:mb-4 xl:mb-7">
          Our Mission
        </h4>
        <p className="text-base md:text-lg font-normal md:leading-[30px] text-about-us-description">
          Our mission at Freelancer is clear: to craft software solutions that
          make a positive impact. We are driven by the belief that technology,
          when harnessed with purpose and creativity, can shape a brighter
          future. Our team is dedicated to creating software that not only meets
          our clients&apos; needs but also exceeds their expectations.
        </p>
        <p className="text-base md:text-lg font-normal md:leading-[30px] text-about-us-description mt-4 xl:mt-8">
          We are excited about the journey ahead and look forward to partnering
          with you to turn your vision into reality. Together, we&apos;ll write
          the next chapter of our story, one line of code at a time. Welcome to
          Freelancer, where innovation meets dedication, and results are our
          promise.
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
        width={32}
        height={32}
        loading="lazy"
        alt="decor-2"
        className="absolute -bottom-4 -left-3 z-about-us-image-decoration rotate-[35deg] max-md:w-[20px] max-md:h-[20px] max-md:-bottom-2"
      />
      <Image
        src={IMAGES_CONSTANT.circleDecoration}
        width={32}
        height={32}
        loading="lazy"
        alt="decor-1"
        className="absolute -top-3 right-[40%] z-about-us-image-decoration rotate-[35deg] max-md:w-[20px] max-md:h-[20px] max-md:-top-2"
      />
      <Image
        src={IMAGES_CONSTANT.ourMission}
        alt="our-mission"
        width={575}
        height={473}
        loading="lazy"
        className="relative z-about-us-image"
      />
    </div>
  );
}
