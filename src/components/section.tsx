import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  noMaxWidth?: boolean;
}

function Section(props: Props, ref: any) {
  const { noMaxWidth = false, id, ...restProps } = props;

  return (
    <section
      {...restProps}
      ref={ref}
      className={clsx(
        !noMaxWidth && "md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4",
        props.className
      )}
    >
      {id && (
        <div className="relative">
          <div className="absolute -top-[79px]" id={id} />
        </div>
      )}
      {props.children}
    </section>
  );
}
export default React.forwardRef(Section);
