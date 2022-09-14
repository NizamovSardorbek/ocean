import React from "react";
import { Wordsbig, WrapBottom } from "./messengersstyle";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
function Messengers() {
  return (
    <WrapBottom>
      <Wordsbig>
        © 2021 DigitalAnalyst.org. A 50 non-profit organization. EIN: -3410655
      </Wordsbig>
      <div>
        <i>
          <FaFacebookF />
        </i>
        <i>
          <BsTwitter />
        </i>
        <i>
          <AiFillYoutube />
        </i>
        <i>
          <BsInstagram />
        </i>
      <button>Sign Up</button>
      </div>
    </WrapBottom>
  );
}

export default Messengers;
