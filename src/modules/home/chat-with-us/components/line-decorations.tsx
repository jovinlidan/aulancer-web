"use client";

import IMAGES_CONSTANT from "@/constants/image.constant";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

const DURATION = 0.5;
export default function LineDecorations() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [, animate] = useAnimate();

  const startAnimation = useCallback(async () => {
    animate(
      ref1.current,
      {
        opacity: 0,
      },
      { repeat: 1, repeatType: "mirror", ease: "easeInOut", duration: DURATION }
    );
    animate(
      ref2.current,
      {
        opacity: 0,
      },
      { repeat: 1, repeatType: "mirror", ease: "easeInOut", duration: DURATION }
    );
    animate(
      ref3.current,
      {
        opacity: 0,
      },
      { repeat: 1, repeatType: "mirror", ease: "easeInOut", duration: DURATION }
    );
    animate(
      ref4.current,
      {
        opacity: 0,
      },
      { repeat: 1, repeatType: "mirror", ease: "easeInOut", duration: DURATION }
    );
    animate(
      ref5.current,
      {
        opacity: 0,
      },
      { repeat: 1, repeatType: "mirror", ease: "easeInOut", duration: DURATION }
    );
    await animate(
      ref6.current,
      {
        opacity: 0,
      },
      { repeat: 1, repeatType: "mirror", ease: "easeInOut", duration: DURATION }
    );

    startAnimation();
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);
  return (
    <>
      {/* Top */}
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -left-24 right-0 mx-auto -top-14 -rotate-45"
        ref={ref1}
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute left-0 right-0 mx-auto -top-16"
        ref={ref2}
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -right-24 left-0 mx-auto -top-14 rotate-45"
        ref={ref3}
      />

      {/* Bottom */}
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -left-24 right-0 mx-auto -bottom-14 rotate-45"
        ref={ref4}
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute left-0 right-0 mx-auto -bottom-16"
        ref={ref5}
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -right-24 left-0 mx-auto -bottom-14 -rotate-45"
        ref={ref6}
      />
    </>
  );
}
