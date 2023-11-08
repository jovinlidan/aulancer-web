import { Section } from "@/components";
import React from "react";
import OurFounderTitle from "./components/our-founder-title";
import FounderCard, { FounderCardType } from "./components/founder-card";
import IMAGES_CONSTANT from "@/constants/image.constant";

const OUR_FOUNDERS: FounderCardType[] = [
  {
    imageUrl: IMAGES_CONSTANT.ourFounder,
    instagramUrl: "https://instagram.com/jovinlidan_/",
    linkedinUrl: "https://www.linkedin.com/in/jovin-lidan",
    name: "Jovin Lidan",
    position: "Co-Founder",
    contentClassName: "max-md:pl-2 md:mt-5",
    containerClassName: "md:flex-col",
  },
  {
    imageUrl: IMAGES_CONSTANT.ourFounder,
    instagramUrl: "https://www.instagram.com/malvino.tan/",
    linkedinUrl: "https://www.linkedin.com/in/malvino-austin-tanura",
    name: "Malvino Austin Tanura",
    position: "Co-Founder",
    contentClassName: "max-md:pr-2 max-md:items-end md:mb-5",
    containerClassName: "max-md:flex-row-reverse md:flex-col-reverse",
    nameClassName: "max-md:text-right",
    positionClassName: "max-md:text-right",
  },
  {
    imageUrl: IMAGES_CONSTANT.ourFounder,
    instagramUrl: "https://www.instagram.com/jameskirawan/",
    linkedinUrl: "https://www.linkedin.com/in/james-kirawan",
    name: "James Kirawan",
    position: "Co-Founder",
    contentClassName: "max-md:pl-2 md:mt-5",
    containerClassName: "md:flex-col",
  },
];

export default function OurFounder() {
  return (
    <Section
      noMaxWidth
      className="flex flex-col items-center justify-center mt-28 bg-light-gray-blue py-16"
    >
      <OurFounderTitle />
      <div className="flex w-full justify-between max-w-[90vw] flex-col md:flex-row">
        {OUR_FOUNDERS.map((founder) => (
          <FounderCard {...founder} key={founder.name} />
        ))}
      </div>
    </Section>
  );
}
