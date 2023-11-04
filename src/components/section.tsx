import React, { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  noMaxWidth?: boolean;
}

function Section(props: Props, ref: any) {
  const { noMaxWidth = false, ...restProps } = props;

  const predefinedClassName = !noMaxWidth ? "max-w-7xl mx-auto" : "";
  return (
    <section
      {...restProps}
      ref={ref}
      className={`${predefinedClassName} ${props.className}`}
    >
      {props.children}
    </section>
  );
}
export default React.forwardRef(Section);
