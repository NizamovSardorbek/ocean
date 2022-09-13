import React from "react";
import {
  Business,
  Buttons,
  Connecting,
  Get,
  Image,
  Left,
  Play,
  Right,
  Rule,
  Smart,
  Wrapper,
} from "./barstyle";
import Family from "./assets/family.png";
import { RiMovieFill } from "react-icons/ri";
function Bar() {
  return (
    <Wrapper>
      <Left>
        <Smart>SMART BUSINESS</Smart>
        <Connecting>
          Connecting people is our <Business>business</Business>
        </Connecting>
        <Rule>
          As a rule the organization settles on the inventive and media choices.
          Regularly it supplies supporting statistical.
        </Rule>
        <Buttons>
          <Get> Get Started</Get>
          <Play>
            <div>
              <RiMovieFill className="icons" />
              Play video
            </div>
          </Play>
        </Buttons>
      </Left>
      <Right>
        <Image src={Family} />
      </Right>
    </Wrapper>
  );
}

export default Bar;
