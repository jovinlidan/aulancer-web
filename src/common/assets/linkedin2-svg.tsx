import * as React from "react";
import { SVGProps } from "react";
const Linkedin2SVG = (props: SVGProps<SVGSVGElement>) => {
  const a = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      {...props}
    >
      <g fill="#1A202C" clipPath={`url(#${a})`}>
        <path d="M10.997 10.689H11V6.793c0-1.905-.425-3.372-2.732-3.372-1.11 0-1.854.587-2.157 1.144h-.033V3.6H3.891v7.088h2.278v-3.51c0-.924.181-1.817 1.367-1.817 1.168 0 1.186 1.054 1.186 1.877v3.45h2.275ZM.182 3.6h2.28v7.089H.182V3.6ZM1.32.071C.593.071 0 .642 0 1.346c0 .705.592 1.288 1.32 1.288.73 0 1.322-.583 1.322-1.288C2.642.642 2.05.071 1.32.071Z" />
      </g>
      <defs>
        <clipPath id={a}>
          <path fill="#fff" d="M0 .071h11v10.618H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Linkedin2SVG;
