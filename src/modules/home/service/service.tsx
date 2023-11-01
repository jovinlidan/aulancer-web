import React from "react";
import ServiceCarousel from "./components/service-carousel";
import { Section } from "@/components";

export default function Service() {
  return (
    <Section noMaxWidth>
      <div className="bg-light-gray-blue w-full pt-12 pb-14 flex flex-col">
        <span className="text-gray-900 font-bold text-4xl text-center">
          Services we offer
        </span>
        <ServiceCarousel />
      </div>
    </Section>
  );
}
