import React from "react";

import Hero from "../components/Hero";
import BgEstradaImage from "./assets/bg_car.jpg";
import BgCarroImage from "./assets/bg_estrada.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Um rolê legal!" image={BgEstradaImage}>
    <p>
      Consequat esse laborum mollit commodo incididunt anim labore ex pariatur
      ipsum excepteur Lorem.
    </p>
  </Hero>
);

export const withlist = () => (
  <Hero
    title={
      <span>
        Dê uma volta por ai, <br />
        <strong>sossegado!</strong>
      </span>
    }
    image={BgCarroImage}
  >
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
