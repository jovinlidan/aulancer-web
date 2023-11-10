import Link from "next/link";
import React from "react";

export default function ContactUs() {
  return (
    <Link
      className="px-[24px] py-[14px] bg-gradient-contact-us rounded-md text-gray-50 ml-4 text-sm font-semibold"
      href="https://api.whatsapp.com/send?phone=62895633098496"
      title="Contact Us"
      target="_blank"
    >
      Contact Us
    </Link>
  );
}
