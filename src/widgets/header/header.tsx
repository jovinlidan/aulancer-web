import React from "react";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import ContactUs from "./components/contact-us";
import MobileNavigation from "./components/mobile-navigation";

export default function Header() {
  return (
    <header className="bg-header w-full h-header shadow-header sticky top-0 z-header">
      <section className="items-center h-full mx-auto hidden px-8 lg:px-0 md:flex md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <Logo />
        <Navigation />
        <ContactUs />
      </section>
      <section className="bg-header items-center h-full mx-auto flex px-4 md:hidden justify-between">
        <Logo />
        <MobileNavigation />
      </section>
    </header>
  );
}
