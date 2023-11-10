import { Section } from "@/components";
import React from "react";
import AboutUsTitle from "./components/about-us-title";
import OurJourney from "./components/our-journey";
import OurValues from "./components/our-values";
import OurMission from "./components/our-mission";
import ROUTES_CONSTANT from "@/constants/route.constant";

export default function AboutUs() {
  return (
    <Section
      className="flex flex-col items-center justify-center mt-28"
      id={ROUTES_CONSTANT.aboutUs.replace("#", "")}
    >
      <AboutUsTitle />
      <OurJourney />
      <OurValues />
      <OurMission />
    </Section>
  );
}
