import { LogoSVG } from "@/common/assets";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center cursor-pointer">
      <LogoSVG />
      <span className="font-medium ml-2 text-2xl md:text-3xl">Aulancer</span>
    </div>
  );
}
