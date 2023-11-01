import React from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Our Key Values",
    href: "#our-key-values",
  },
  {
    label: "About Us",
    href: "#about-us",
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
