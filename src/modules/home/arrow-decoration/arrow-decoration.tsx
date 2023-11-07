import { Section } from "@/components";
import IMAGES_CONSTANT from "@/constants/image.constant";
import Image from "next/image";
import React from "react";

export default function ArrowDecoration() {
  return (
    <Section className="relative">
      <Image
        src={IMAGES_CONSTANT.arrowDecoration}
        width={250}
        height={210}
        alt="arrow-decoraion-1"
        loading="lazy"
        className="absolute -top-24 -left-12"
        quality={1}
      />
      <Image
        src={IMAGES_CONSTANT.circleDecoration}
        width={18}
        height={18}
        alt="circle-decoraion-1"
        loading="lazy"
        className="absolute top-28 left-40"
        quality={1}
      />
      <Image
        src={IMAGES_CONSTANT.arrowDecoration2}
        width={190}
        height={210}
        alt="arrow-decoraion-1"
        loading="lazy"
        className="absolute -top-24 -right-0"
        quality={1}
      />
    </Section>
  );
}
