import { LogoSVG } from "@/common/assets";
import IMAGES_CONSTANT from "@/constants/image.constant";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-1 items-center">
      <LogoSVG width={68} height={51} />
      <span className="text-default text-4xl font-bold ml-3">Aulancer</span>
    </div>
  );
}
