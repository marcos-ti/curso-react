import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgEstradaImage from "../stories/assets/bg_car.jpg";
import BgCarroImage from "../stories/assets/bg_estrada.jpg";
import Heading from "./Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgEstradaImage}>
    <h1>{text("Title", "Um rolê legal!")}</h1>
    <p>
      {text(
        "Text",
        "Consequat esse laborum mollit commodo incididunt anim labore ex pariatur ipsum excepteur Lorem."
      )}
    </p>
  </Hero>
);

export const withlist = () => (
  <Hero image={BgCarroImage}>
    <Heading>
      <h1>
        Dê uma volta por ai, <br />
        <strong>sossegado!</strong>
      </h1>
    </Heading>
    <ul>
      <li>
        Quis laboris sunt elit Lorem exercitation culpa deserunt id veniam
        ullamco reprehenderit irure tempor deserunt.
      </li>
      <li>Laborum consectetur veniam occaecat sit est.</li>
      <li>
        Consequat excepteur elit officia aute qui amet duis officia amet
        incididunt.
      </li>
    </ul>
  </Hero>
);
