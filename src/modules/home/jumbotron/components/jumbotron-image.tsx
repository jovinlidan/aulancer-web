import IMAGES_CONSTANT from "@/constants/image.constant";
import Image from "next/image";
import React from "react";

export default function JumbotronImage() {
  return (
    <div className="flex-3">
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
