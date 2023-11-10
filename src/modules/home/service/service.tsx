import ServiceCarousel from "./components/service-carousel";
import { Section } from "@/components";
import Image from "next/image";
import IMAGES_CONSTANT from "@/constants/image.constant";

export default function Service() {
  return (
    <Section noMaxWidth className="relative">
      <Image
        className="absolute top-[-36px] left-[16%] z-service-ball-decoration"
        src={IMAGES_CONSTANT.circleDecoration}
        width={72}
        height={72}
        alt="circle-decoration"
      />
      <Image
        className="absolute bottom-[-36px] left-[8%] z-service-ball-decoration"
        src={IMAGES_CONSTANT.circleDecoration}
        width={72}
        height={72}
        alt="circle-decoration"
      />
      <div className="bg-light-gray-blue w-full pt-12 pb-14 flex flex-col z-service-bg relative">
        <h4 className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl text-center">
          Services we offer
        </h4>
        <ServiceCarousel />
      </div>
    </Section>
  );
}
