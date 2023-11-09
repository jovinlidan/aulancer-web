import IMAGES_CONSTANT from "@/constants/image.constant";
import Image from "next/image";
import React from "react";

export default function LineDecorations() {
  return (
    <>
      {/* Top */}
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -left-24 right-0 mx-auto -top-14 -rotate-45"
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute left-0 right-0 mx-auto -top-16"
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -right-24 left-0 mx-auto -top-14 rotate-45"
      />

      {/* Bottom */}
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -left-24 right-0 mx-auto -bottom-14 rotate-45"
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute left-0 right-0 mx-auto -bottom-16"
      />
      <Image
        src={IMAGES_CONSTANT.lineDecoration}
        alt="line-decoration"
        height={32}
        width={8}
        className="absolute -right-24 left-0 mx-auto -bottom-14 -rotate-45"
      />
    </>
  );
}
