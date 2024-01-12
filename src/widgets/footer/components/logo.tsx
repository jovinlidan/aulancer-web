import { LogoSVG } from "@/common/assets";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link className="flex flex-1 items-center" href="/" title="Freelancer">
      <LogoSVG width={68} height={51} />
      <span className="text-default text-4xl font-bold ml-3">Freelancer</span>
    </Link>
  );
}
