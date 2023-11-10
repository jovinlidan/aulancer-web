"use client";

import IMAGES_CONSTANT from "@/constants/image.constant";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function JumbotronImage() {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });
  return (
    <div
      className={clsx(
        "flex-3 transition-all duration-1000 ease-in-out",
        isInView ? "translate-y-0 opacity-100" : "-translate-y-1/3 opacity-0"
      )}
      ref={divRef}
    >
      <Image
        src={IMAGES_CONSTANT.jumbotron}
        alt="jumbotron"
        width={614}
        height={546}
        priority
      />
    </div>
  );
}
