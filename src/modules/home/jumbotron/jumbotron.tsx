import React from "react";
import JumbotronInfo from "./components/jumbotron-info";
import JumbotronImage from "./components/jumbotron-image";
import { Section } from "@/components";

export default function Jumbotron() {
  return (
    <Section className="flex px-12 py-20 items-center">
      <JumbotronInfo />
      <JumbotronImage />
    </Section>
  );
}
