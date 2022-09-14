import React from "react";
import {
  AllHow,
  Bottomtext,
  Container,
  LeftHow,
  LeftImage,
  Lefttext,
  MiddleHow,
  RightHow,
  TopHow,
} from "./iconsstyle";
import Leftimg from "./assets/logo1.png";
import Middleimg from "./assets/2nd icon.png";
import Rightimg from "./assets/logo3.png";
function Icons() {
  return (
    <Container>
      <TopHow>How We Work</TopHow>
      <AllHow>
        <LeftHow>
          <LeftImage src={Leftimg} />
          <Lefttext>Start Design </Lefttext>
          <Bottomtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            suscipit adipiscing elit.
          </Bottomtext>
        </LeftHow>
        <MiddleHow>
          <LeftImage src={Middleimg} />
          <Lefttext>Go to Code</Lefttext>
          <Bottomtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            suscipit adipiscing elit.
          </Bottomtext>
        </MiddleHow>
        <RightHow>
          <LeftImage src={Rightimg} />
          <Lefttext>Final Deliverd </Lefttext>
          <Bottomtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            suscipit adipiscing elit.
          </Bottomtext>
        </RightHow>
      </AllHow>
    </Container>
  );
}

export default Icons;
