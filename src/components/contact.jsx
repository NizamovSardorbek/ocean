import React from "react";
import {
  ContactLeft,
  LeftImages,
  LittleWords,
  Words,
  Wrap,
} from "./contactstyle";
import Iconbottom from "./assets/Ocean.png";

function Contact() {
  return (
    <Wrap>
      <ContactLeft>
        <LeftImages src={Iconbottom} />
        <LittleWords>Smart business</LittleWords>
        <LittleWords>Community</LittleWords>
      </ContactLeft>
      <ContactLeft>
        <Words>Resources</Words>
        <LittleWords>Smart business</LittleWords>
        <LittleWords>Community</LittleWords>
        <LittleWords>Smart business</LittleWords>
        <LittleWords>Community</LittleWords>
      </ContactLeft>
      <ContactLeft>
        <Words>Misson</Words>
        <LittleWords>Start Business</LittleWords>
        <LittleWords>Digital Marketing</LittleWords>
        <LittleWords>Course Creation</LittleWords>
        <LittleWords>Business Accelerator</LittleWords>
      </ContactLeft>
      <ContactLeft>
        <Words>Contact</Words>
        <LittleWords>041-774073</LittleWords>
        <LittleWords>hello@digitalanalyst.org</LittleWords>
        <LittleWords>Contact Form</LittleWords>
      </ContactLeft>
    </Wrap>
  );
}

export default Contact;
