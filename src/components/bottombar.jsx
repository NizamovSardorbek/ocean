import React from "react";
import {
  Buttons,
  Community,
  Contain,
  Images1,
  Images2,
  Left,
  Lorems,
  Promited,
  Right,
} from "./bottombarstyle";
import Turn from "./assets/image1.png";
import Back from "./assets/back.png";
function Bottombar() {
  return (
    <Contain>
      <Left>
        <Images1 src={Turn} />
        <Images2 src={Back} />
      </Left>
      <Right>
        <Community>Community</Community>
        <Promited>Platform Deditaced To Promoting</Promited>
        <Lorems>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          vestibulum sagittis ultrices consectetur adipiscing elit. fringilla
          quisque pulvinar..
        </Lorems>
        <Buttons>What we do ?</Buttons>
      </Right>
    </Contain>
  );
}

export default Bottombar;
