import React from "react";
import { AllTop, Buttoncha, TopImage, Wordslar } from "./navbarstyle";
import IconOcens from "./assets/Ocean.png";
function Navbar() {
  return (
    <AllTop>
      <TopImage src={IconOcens} />
      <Wordslar>Home</Wordslar>
      <Wordslar>About</Wordslar>
      <Wordslar>Services</Wordslar>
      <Wordslar>Reviews</Wordslar>
      <Buttoncha>Get Starteed</Buttoncha><hr />
    </AllTop>
  );
}

export default Navbar;
