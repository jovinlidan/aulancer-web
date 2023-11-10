import clsx from "clsx";
import { forwardRef } from "react";

export type OurKeyType = {
  number: string;
  title: string;
  description: string;
  customClassName?: React.HTMLProps<HTMLElement>["className"];
};
interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction: "top" | "bottom" | "left";
  ourKey: OurKeyType;
}

function OurKeyCard(props: CardProps, ref: any) {
  const { className, direction, ourKey, ...restProps } = props;
  const directionClassName =
    direction === "top"
      ? "md:after:-top-[30px] md:after:-mt-4 md:mt-3"
      : direction === "bottom"
      ? "md:after:-bottom-[30px] md:after:-mb-4 md:mb-3"
      : "max-md:after:-left-[30px] max-md:after:-ml-5 max-md:ml-12";

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col border border-solid border-our-key-card-border rounded-lg relative select-none",
        "after:absolute after:bg-gradient-service-text",
        (direction === "bottom" || direction === "top") &&
          "after:w-[2px] after:h-[30px] after:left-0 after:right-0 after:mx-auto",
        direction === "left" &&
          "after:w-[30px] after:h-[2px] after:top-0 after:bottom-0 after:my-auto",
        "md:p-5 md:min-h-[160px] md:max-w-[300px]",
        "max-md:p-3 ",
        directionClassName,
        className
      )}
      {...restProps}
    >
      <span className="flex items-center">
        <h6 className="font-bold max-md:text-base md:text-lg text-transparent bg-gradient-service-text bg-clip-text">
          {ourKey.number}
        </h6>
        <h6 className="font-bold max-md:text-base md:text-lg ml-2">
          {ourKey.title}
        </h6>
      </span>
      <p className="text-gray-600 font-normal max-md:text-xs md:text-sm mt-1 lg:mt-3">
        {ourKey.description}
      </p>
    </div>
  );
}

export default forwardRef(OurKeyCard);
