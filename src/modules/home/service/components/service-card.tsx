import { clsx } from "clsx";
import React from "react";
import { m } from "framer-motion";
import type { Variants } from "framer-motion";

export type ServiceType = {
  label: string;
  description: string;
  icon: React.ReactNode;
};

interface Props {
  selectedIndex: number;
  idx: number;
  item: ServiceType;
}
const variants: Variants = {
  selected: {
    y: 50,
  },
  unselected: {
    y: 0,
  },
};

export default function ServiceCard(props: Props) {
  const { idx, item, selectedIndex } = props;
  return (
    <m.div
      className={clsx(
        "shadow-service min-h-[287px] select-none bg-white rounded-md",
        selectedIndex === idx && "border-service-active border border-solid"
      )}
      variants={variants}
      animate={selectedIndex === idx ? "selected" : "unselected"}
    >
      <div className="flex flex-col items-center justify-center  pt-9 pl-4 pr-4 pb-10">
        <div className="flex items-center justify-center">{item.icon}</div>
        <span
          className={clsx(
            "text-service-label text-xl font-semibold text-center mt-6",
            selectedIndex === idx &&
              "bg-clip-text text-transparent bg-gradient-service-text"
          )}
        >
          {item.label}
        </span>
        <span className="text-gray-900 text-sm text-center mt-5 tracking-wide">
          {item.description}
        </span>
      </div>
    </m.div>
  );
}
