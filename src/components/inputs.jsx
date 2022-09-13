import React from "react";
import {
  InputsWords,
  InputWrapper,
  MainWrapper,
  SignWords,
  SignWords2,
  WrapperInput,
} from "./inputsstyle";
import { AiOutlineMail } from "react-icons/ai";
function Inputs() {
  return (
    <WrapperInput>
      <SignWords>Sign Up to Our Newsletter</SignWords>
      <SignWords2>Yours could be one of them.</SignWords2>
      <MainWrapper>
        <InputWrapper>
          <i>
            <AiOutlineMail />
          </i>
          <InputsWords placeholder="Enter Your Email" type="text" />
          <button>Send</button>
        </InputWrapper>{" "}
      </MainWrapper>
    </WrapperInput>
  );
}

export default Inputs;
