import React from "react";

import "./Hero.css";

const hero = ({ title, children }) => (
  <div>
    <div>
      <h1>{title}</h1>
      {children}
      <button>Matricule-se agora</button>
    </div>
  </div>
);

export default hero;
