import React from "react";
import headerImgSrc from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={headerImgSrc}></img>
      <h1>Investment Calculator</h1>
    </div>
  );
}
