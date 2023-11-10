import { InstagramSVG, LinkedinSVG } from "@/common/assets";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type FounderCardType = {
  imageUrl: string;
  name: string;
  position: string;
  instagramUrl: string;
  linkedinUrl: string;
  contentClassName?: string;
  containerClassName?: string;
  nameClassName?: string;
  positionClassName?: string;
};

interface Props extends FounderCardType {}
export default function FounderCard(props: Props) {
  const {
    imageUrl,
    instagramUrl,
    linkedinUrl,
    name,
    position,
    contentClassName,
    containerClassName,
    nameClassName,
    positionClassName,
  } = props;
  return (
    <div
      className={clsx("flex w-full md:w-[30%] max-md:mt-8", containerClassName)}
      title={name}
    >
      <Image
        src={imageUrl}
        width={376}
        height={473}
        alt={name}
        loading="lazy"
        className="max-md:w-[45vw] max-md:max-w-[200px] md:w-full select-none pointer-events-none"
      />
      <div
        className={clsx(
          "flex justify-between flex-col max-md:pt-2 md:flex-row md:items-end",
          contentClassName
        )}
      >
        <div className="flex flex-col">
          <h5
            className={clsx(
              "text-gray-900 font-semibold text-lg md:text-xl lg:text-2xl",
              nameClassName
            )}
          >
            {name}
          </h5>
          <h6
            className={clsx(
              "text-our-founder-position text-sm md:text-base lg:text-lg font-normal",
              positionClassName
            )}
          >
            {position}
          </h6>
        </div>
        <div className="flex flex-col md:flex-row w-fit">
          <Link
            href={instagramUrl}
            target="_blank"
            className="max-md:mb-2"
            title="Instagram"
          >
            <InstagramSVG className="max-md:w-[32px] max-md:h-[32px]" />
          </Link>
          <Link href={linkedinUrl} target="_blank" title="LinkedIn">
            <LinkedinSVG className="max-md:w-[32px] max-md:h-[32px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
