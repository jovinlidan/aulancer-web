import { LogoSVG } from "@/common/assets";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      className="flex items-center cursor-pointer"
      title="Freelancer"
      href="/"
    >
      <LogoSVG />
      <span className="font-medium ml-2 text-2xl md:text-3xl">Freelancer</span>
    </Link>
  );
}
