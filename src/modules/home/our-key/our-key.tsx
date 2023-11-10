import { Section } from "@/components";
import clsx from "clsx";
import * as React from "react";
import OurKeyTitle from "./components/our-key-title";
import ROUTES_CONSTANT from "@/constants/route.constant";

type OurKeyType = {
  number: string;
  title: string;
  description: string;
  customClassName?: React.HTMLProps<HTMLElement>["className"];
};
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
  return (
    <Section
      className="flex py-11 flex-col"
      id={ROUTES_CONSTANT.ourKeyValues.replace("#", "")}
    >
      <OurKeyTitle />
      <div className="md:flex-col">
        {/* Desktop */}
        <div className="hidden md:flex-row md:flex">
          {[0, 2, 4].map((item) => (
            <Card
              direction="bottom"
              ourKey={OUR_KEYS[item]}
              className={OUR_KEYS[item].customClassName}
              key={item.toString()}
            />
          ))}
        </div>
        <hr className="md:h-[2px] md:my-8 bg-gradient-service-text border-0 max-md:hidden" />
        <div className="flex flex-col md:flex-row max-md:hidden">
          {[1, 3, 5].map((item) => (
            <Card
              direction="top"
              ourKey={OUR_KEYS[item]}
              className={OUR_KEYS[item].customClassName}
              key={item.toString()}
            />
          ))}
        </div>
        {/* Mobile */}
        <div className="flex md:hidden mx-8 my-20">
          <hr className="max-md:min-w-[2px] max-md:h-auto bg-gradient-service-text border-0" />
          <div className="flex flex-col">
            {OUR_KEYS.map((item, index) => (
              <Card
                ourKey={item}
                className={item.customClassName}
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

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction: "top" | "bottom" | "left";
  ourKey: OurKeyType;
}

function Card(props: CardProps) {
  const { className, direction, ourKey, ...restProps } = props;
  const directionClassName =
    direction === "top"
      ? "md:after:-top-[30px] md:after:-mt-4 md:mt-3"
      : direction === "bottom"
      ? "md:after:-bottom-[30px] md:after:-mb-4 md:mb-3"
      : "max-md:after:-left-[30px] max-md:after:-ml-5 max-md:ml-12";

  return (
    <div
      className={clsx(
        "flex flex-col border border-solid border-our-key-card-border rounded-lg relative select-none",
        "after:absolute after:bg-gradient-service-text",
        (direction === "bottom" || direction === "top") &&
          "after:w-[2px] after:h-[30px] after:left-0 after:right-0 after:mx-auto",
        direction === "left" &&
          "after:w-[30px] after:h-[2px] after:top-0 after:bottom-0 after:my-auto",
        "md:p-5 md:min-h-[160px] md:max-w-[300px]",
        "max-md:p-3 ",
        directionClassName,
        className
      )}
      {...restProps}
    >
      <span className="flex items-center">
        <h6 className="font-bold max-md:text-base md:text-lg text-transparent bg-gradient-service-text bg-clip-text">
          {ourKey.number}
        </h6>
        <h6 className="font-bold max-md:text-base md:text-lg ml-2">
          {ourKey.title}
        </h6>
      </span>
      <p className="text-gray-600 font-normal max-md:text-xs md:text-sm mt-1 lg:mt-3">
        {ourKey.description}
      </p>
    </div>
  );
}
