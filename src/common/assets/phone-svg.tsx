import * as React from "react";
import { SVGProps } from "react";
const PhoneSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      fill="none"
      viewBox="0 0 50 50"
      aria-labelledby="mobile-phone-android-ios"
      {...props}
    >
      <path
        fill="#4252DF"
        d="M35.938 48.438H14.061a4.688 4.688 0 0 1-4.687-4.688V6.25a4.688 4.688 0 0 1 4.688-4.688h21.874a4.688 4.688 0 0 1 4.688 4.688v37.5a4.688 4.688 0 0 1-4.688 4.688ZM14.061 4.688A1.563 1.563 0 0 0 12.5 6.25v37.5a1.563 1.563 0 0 0 1.563 1.563h21.874A1.563 1.563 0 0 0 37.5 43.75V6.25a1.563 1.563 0 0 0-1.563-1.563H14.064Z"
      />
      <path
        fill="#4252DF"
        d="M39.063 10.938H10.936a1.563 1.563 0 1 1 0-3.126h28.126a1.563 1.563 0 0 1 0 3.125ZM39.063 39.063H10.936a1.563 1.563 0 1 1 0-3.126h28.126a1.563 1.563 0 0 1 0 3.126ZM26.563 40.625h-3.125v3.125h3.125v-3.125Z"
      />
    </svg>
  );
};
export default PhoneSVG;
