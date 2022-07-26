import React from "react";

import Hero from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="De uma volta por ai, sossegado!">
    <p>
      Consequat esse laborum mollit commodo incididunt anim labore ex pariatur
      ipsum excepteur Lorem.
    </p>
  </Hero>
);

export const withlist = () => (
  <Hero title="De uma volta por ai, sossegado!">
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
