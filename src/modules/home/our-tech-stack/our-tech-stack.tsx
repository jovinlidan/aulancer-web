import { Section } from "@/components";
import React from "react";
import OurTechStackTitle from "./components/our-tech-stack";
import Image from "next/image";
import IMAGES_CONSTANT from "@/constants/image.constant";
import clsx from "clsx";

type OurTechStackType = {
  name: string;
  imageUrl: string;
  className?: string;
};
const OUR_TECH_STACK: OurTechStackType[] = [
  {
    name: "golang",
    imageUrl: IMAGES_CONSTANT.techStack.golang,
    className: "",
  },
  {
    name: "laravel",
    imageUrl: IMAGES_CONSTANT.techStack.laravel,
    className: "",
  },
  {
    name: "mongodb",
    imageUrl: IMAGES_CONSTANT.techStack.mongodb,
    className: "",
  },
  {
    name: "mysql",
    imageUrl: IMAGES_CONSTANT.techStack.mysql,
    className: "",
  },
  {
    name: "nextjs",
    imageUrl: IMAGES_CONSTANT.techStack.nextjs,
    className: "",
  },
  {
    name: "nodejs",
    imageUrl: IMAGES_CONSTANT.techStack.nodejs,
    className: "",
  },
  {
    name: "php",
    imageUrl: IMAGES_CONSTANT.techStack.php,
    className: "",
  },
  {
    name: "postgresql",
    imageUrl: IMAGES_CONSTANT.techStack.postgresql,
    className: "",
  },
  {
    name: "python",
    imageUrl: IMAGES_CONSTANT.techStack.python,
    className: "",
  },
  {
    name: "reactjs",
    imageUrl: IMAGES_CONSTANT.techStack.reactjs,
    className: "",
  },
];

export default function OurTechStack() {
  return (
    <Section className="flex flex-col items-center justify-center my-16">
      <OurTechStackTitle />
      <div className="flex flex-wrap justify-center">
        {OUR_TECH_STACK.map((techStack) => (
          <div
            key={techStack.name}
            className="relative w-[166px] h-[94px] mx-4 select-none"
          >
            <Image
              src={techStack.imageUrl}
              alt={techStack.name}
              className={clsx(
                "object-contain select-none pointer-events-none",
                techStack.className
              )}
              fill
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
