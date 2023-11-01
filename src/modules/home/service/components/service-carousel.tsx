"use client";
import { GearSVG, LaptopSVG, PhoneSVG } from "@/common/assets";
import { Section } from "@/components";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion, wrap } from "framer-motion";

type ServiceType = {
  label: string;
  description: string;
  icon: React.ReactNode;
};

const SERVICES: ServiceType[] = [
  {
    label: "UI/UX Design",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: <PhoneSVG />,
  },
  {
    label: "Mobile Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: <PhoneSVG />,
  },
  {
    label: "Web Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: <LaptopSVG />,
  },
  {
    label: "Desktop Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: <LaptopSVG />,
  },
  {
    label: "App Maintainance",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: <GearSVG />,
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ServiceCarousel() {
  const [[pages, direction], setPage] = React.useState([[0, 1, 2, 3, 4], 0]);

  const paginate = (newDirection: number) => {
    setPage((prev) => [
      prev[0].map((item) => item + newDirection),
      newDirection,
    ]);
  };

  return (
    <Section noMaxWidth className="w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="flex pt-14 pb-12"
          style={{
            marginLeft: "-15%",
          }}
          key="service-carousel"
          variants={variants}
          animate="center"
          initial="enter"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {Array.from(Array(5).keys()).map((num, idx) => (
            <ServiceCard page={pages[num]} key={idx.toString()} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

interface ServiceCardProps {
  page: number;
}

function ServiceCard(props: ServiceCardProps) {
  const { page } = props;
  const idx = wrap(0, SERVICES.length, page);
  const item = SERVICES[idx];
  return (
    <div
      className="shadow-service min-h-[287px] min-w-[333px] select-none box-border bg-white mx-5 rounded-md "
      key={item.toString()}
      title={item.label}
    >
      <div className="flex flex-col items-center justify-center  pt-9 pl-4 pr-4 pb-10">
        <div className="flex items-center justify-center">{item.icon}</div>
        <span className="text-service-label text-xl font-semibold text-center mt-6">
          {item.label}
        </span>
        <span className="text-gray-900 text-sm text-center mt-5">
          {item.description}
        </span>
      </div>
    </div>
  );
}
