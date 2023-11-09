import { Section } from "@/components";
import React from "react";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import Social from "./components/social";
import Copyright from "./components/copyright";

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <Section className="flex flex-col md:flex-row justify-between mb-12">
        <Logo />
        <Navigation />
        <Social />
      </Section>
      <Copyright />
    </footer>
  );
}
