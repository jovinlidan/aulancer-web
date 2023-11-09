import React from "react";
import Link from "next/link";
import ROUTES_CONSTANT from "@/constants/route.constant";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
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
export default function Navigation() {
  return (
    <div className="w-full pl-16 flex flex-1 max-lg:pl-4">
      <nav className="flex justify-between max-w-sm flex-1">
        {NAV_ITEMS.map((item) => (
          <Link key={item.label} href={item.href}>
            <span className="text-base text-default">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
