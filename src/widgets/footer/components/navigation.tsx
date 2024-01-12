import ROUTES_CONSTANT from "@/constants/route.constant";
import Link from "next/link";
import React from "react";

const LINKS = [
  {
    label: "Services",
    href: ROUTES_CONSTANT.services,
  },
  {
    label: "Our Key Values",
    href: ROUTES_CONSTANT.ourKeyValues,
  },
  {
    label: "About Us",
    href: ROUTES_CONSTANT.aboutUs,
  },
];

const CONTACT_US = [
  {
    label: "jovinlidan1@gmail.com",
    href: "mailto:jovinlidan1@gmail.com",
  },
  {
    label: "+62895414368386",
    href: "tel:+62895414368386",
  },
];

export default function Navigation() {
  return (
    <div className="flex flex-[1] lg:flex-[2] max-md:mt-8">
      <div className="flex flex-col flex-[1]">
        <span className="text-default font-bold text-lg mb-2">Links</span>
        <ul>
          {LINKS.map((link) => (
            <li key={link.label} title={link.label}>
              <Link
                href={link.href}
                className="text-gray-600 font-normal text-base leading-9"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col flex-1 lg:flex-[1.8]">
        <span className="text-default font-bold text-lg mb-2">Contact Us</span>
        <ul>
          {CONTACT_US.map((contact) => (
            <li key={contact.label} title={contact.label}>
              <Link
                href={contact.href}
                target="_blank"
                className="text-gray-600 font-normal text-base leading-9"
              >
                {contact.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
