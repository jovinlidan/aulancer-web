"use client";
import { Section } from "@/components";
import clsx from "clsx";
import * as React from "react";
import OurKeyTitle from "./components/our-key-title";
import ROUTES_CONSTANT from "@/constants/route.constant";
import { useInView } from "framer-motion";
import OurKeyCard, { OurKeyType } from "./components/our-key-card";

const OUR_KEYS: OurKeyType[] = [
  {
    number: "#1",
    title: "Dedication",
    description:
      "We are unwavering in our commitment to our work, clients, and team. Dedication is force us to keep improving.",
    customClassName: "max-md:-translate-y-2/4 md:ml-[2%] lg:ml-[2%] xl:ml-[4%]",
  },
  {
    number: "#2",
    title: "Reputation",
    description:
      "Our reputation is our most valuable asset. We maintain it with honesty and integrity, earning the trust and respect of our clients and partners.",
    customClassName: "max-md:-translate-y-8 md:ml-[4%] lg:ml-[4%] xl:ml-[8%]",
  },
  {
    number: "#3",
    title: "Innovation",
    description:
      "We constantly seek new, creative solutions to challenges, staying at the forefront of technological advancements.",
    customClassName: "max-md:-translate-y-3 md:ml-[2%] lg:ml-[6%] xl:ml-[8%]",
  },
  {
    number: "#4",
    title: "Collaboration",
    description:
      "We foster a culture of teamwork and open communication, both internally and with our clients. Collaboration sparks creativity and synergy.",
    customClassName: "max-md:translate-y-2 md:ml-[2%] lg:ml-[6%]  xl:ml-[8%]",
  },
  {
    number: "#5",
    title: "Adaptability",
    description:
      "Adapt to the market conditions is crucial. We remain agile and flexible, ensuring we can pivot when necessary to meet evolving requirements.",
    customClassName:
      "max-md:translate-y-8 md:ml-[2%] lg:ml-[6%] xl:ml-[8%] md:mr-4",
  },
  {
    number: "#6",
    title: "Results",
    description:
      "We approach each project with a results-oriented mindset, ensuring that our clients' objectives are not just met but exceeded.",
    customClassName:
      "max-md:translate-y-2/4 md:ml-[2%] lg:ml-[6%] xl:ml-[8%] md:mr-4",
  },
];

export default function OurKey() {
  const divRef = React.useRef(null);
  const isInView = useInView(divRef, { once: true });

  const mobileDivRef = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
  ];
  const mobileIsInView = [
    useInView(mobileDivRef[0], { once: true }),
    useInView(mobileDivRef[1], { once: true }),
    useInView(mobileDivRef[2], { once: true }),
    useInView(mobileDivRef[3], { once: true }),
    useInView(mobileDivRef[4], { once: true }),
    useInView(mobileDivRef[5], { once: true }),
  ];
  return (
    <Section
      className="flex py-11 flex-col"
      id={ROUTES_CONSTANT.ourKeyValues.replace("#", "")}
    >
      <OurKeyTitle />
      <div className="md:flex-col" ref={divRef}>
        {/* Desktop */}
        <div className="hidden md:flex-row md:flex">
          {[0, 2, 4].map((item) => (
            <OurKeyCard
              direction="bottom"
              ourKey={OUR_KEYS[item]}
              className={clsx(
                OUR_KEYS[item].customClassName,
                "transition-all duration-1000 ease-in-out",
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-1/3 opacity-0"
              )}
              key={item.toString()}
            />
          ))}
        </div>
        <hr className="md:h-[2px] md:my-8 bg-gradient-service-text border-0 max-md:hidden" />
        <div className="flex flex-col md:flex-row max-md:hidden">
          {[1, 3, 5].map((item) => (
            <OurKeyCard
              direction="top"
              ourKey={OUR_KEYS[item]}
              className={clsx(
                OUR_KEYS[item].customClassName,
                "transition-all duration-1000 ease-in-out",
                isInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-1/3 opacity-0"
              )}
              key={item.toString()}
            />
          ))}
        </div>
        {/* Mobile */}
        <div className="flex md:hidden mx-8 my-20">
          <hr className="max-md:min-w-[2px] max-md:h-auto bg-gradient-service-text border-0" />
          <div className="flex flex-col">
            {OUR_KEYS.map((item, index) => (
              <OurKeyCard
                ref={mobileDivRef[index]}
                ourKey={item}
                className={clsx(
                  item.customClassName,
                  "transition-all duration-1000 ease-in-out",
                  mobileIsInView[index]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-1/3 opacity-0"
                )}
                key={index.toString()}
                direction="left"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
