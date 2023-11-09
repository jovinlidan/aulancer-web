import { Section } from "@/components";
import React from "react";
import LineDecorations from "./components/line-decorations";

export default function ChatWithUs() {
  return (
    <Section className="bg-gradient-secondary-bg rounded-2xl flex flex-col md:flex-row justify-between items-center h-[300px] md:h-[260px] lg:h-[285px] md:px-[20px] lg:px-[88px]">
      <h4 className="bg-gradient-dark-bg bg-clip-text text-transparent font-bold text-lg md:text-2xl lg:text-4xl max-w-[531px] md:!leading-[40px] lg:!leading-[55px] max-md:mt-8 max-md:text-center">
        Let’s collaborate together to achieve our goals!
      </h4>
      <div className="relative max-md:mb-20">
        <LineDecorations />
        <button className="bg-gradient-danger-bg border border-solid border-white w-[262px] h-[57px] rounded">
          <span className="text-gray-50  font-bold text-lg">Chat with us</span>
        </button>
      </div>
    </Section>
  );
}
