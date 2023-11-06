"use client";
import "swiper/css";
import "swiper/css/pagination";

import { GearSVG, LaptopSVG, PhoneSVG } from "@/common/assets";
import { Section } from "@/components";
import React, { useCallback, useRef } from "react";
import { screenSize } from "@/../tailwind.config";
import ServiceCard, { ServiceType } from "./service-card";
//
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperClass } from "swiper/react";
import { Pagination } from "swiper/modules";

import { AnimatePresence, useInView } from "framer-motion";
import clsx from "clsx";

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

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 8,
  },
  [screenSize.md]: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  [screenSize.lg]: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

export default function ServiceCarousel() {
  const slidesPerView = useRef<number>(3);
  const sectionRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const isInView = useInView(sectionRef, { once: false });

  const onSwipe = useCallback((swiper: SwiperClass) => {
    if (slidesPerView.current !== 1) {
      setSelectedIndex(swiper.realIndex % swiper.slides.length);
      return;
    }
    setSelectedIndex(SERVICES.length);
  }, []);

  const onBreakpoint = useCallback((swiper: SwiperClass) => {
    if (swiper.params.breakpoints) {
      const cur =
        swiper.params.breakpoints[swiper.currentBreakpoint || "0"]
          .slidesPerView;
      if (cur && cur !== "auto") {
        slidesPerView.current = cur;

        if (cur !== 3 && cur !== 2) {
          setSelectedIndex(SERVICES.length);
        } else {
          if (swiper.slides.length !== 0) {
            setSelectedIndex(swiper.realIndex % swiper.slides.length);
          }
        }
      }
    }
  }, []);
  return (
    <Section
      className={clsx(
        "w-full transition-all duration-1000 ease-in-out max-md:px-8",
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-52"
      )}
      ref={sectionRef}
    >
      <Swiper
        loop
        centeredSlides
        pagination={{
          clickable: true,
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-swiper-pagination-bullet-active",
          bulletClass:
            "swiper-pagination-bullet custom-swiper-pagination-bullet",
        }}
        className="flex"
        initialSlide={2}
        onRealIndexChange={onSwipe}
        onBreakpoint={onBreakpoint}
        modules={[Pagination]}
        style={{
          paddingBottom: selectedIndex !== SERVICES.length ? 110 : 56,
          paddingTop: 56,
        }}
        breakpoints={breakpoints}
      >
        {SERVICES.map((item, idx) => (
          <SwiperSlide key={item.label.toString()} title={item.label}>
            <ServiceCard idx={idx} item={item} selectedIndex={selectedIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
