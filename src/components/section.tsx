import React, { PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  noMaxWidth?: boolean;
}

export default function Section(props: Props) {
  const { noMaxWidth = false, ...restProps } = props;

  const predefinedClassName = !noMaxWidth ? "max-w-7xl mx-auto" : "";
  return (
    <section
      {...restProps}
      className={`${predefinedClassName} ${props.className}`}
    >
      {props.children}
    </section>
  );
}
