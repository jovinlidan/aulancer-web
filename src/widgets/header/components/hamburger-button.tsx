import clsx from "clsx";
import React from "react";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function HamburgerButton(props: Props) {
  const { isOpen, toggleOpen } = props;
  return (
    <button
      className="[&>div:not(:last-child)]:mb-1"
      onClick={toggleOpen}
      title="menu"
      aria-label="menu"
      aria-labelledby="menu"
      type="button"
    >
      <div
        className={clsx(
          "w-[28px] h-[4px] bg-gradient-purple-text-2 rounded-full  transition-all duration-200 ease-in-out",
          isOpen ? "rotate-45 translate-y-2" : ""
        )}
      />
      <div
        className={clsx(
          "w-[28px] h-[4px] bg-gradient-purple-text-2 rounded-full transition-all duration-200 ease-in-out",
          isOpen ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={clsx(
          "w-[28px] h-[4px] bg-gradient-purple-text-2 rounded-full transition-all duration-200 ease-in-out",
          isOpen ? "-rotate-45 -translate-y-2" : ""
        )}
      />
    </button>
  );
}
