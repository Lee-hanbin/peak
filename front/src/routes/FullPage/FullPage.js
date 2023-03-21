import React from "react";
import { FullPage, Slide } from "react-full-page";
import "./FullPage.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

function fullPage() {
  return (
    <FullPage controls controlsProps={{ className: "slide-navigation" }}>
      <Slide>
        <SectionOne backgroundColor="var(--white800-color)" />
      </Slide>
      <Slide>
        <SectionTwo backgroundColor="var(--purple800-color)" />
      </Slide>
      <Slide>
        <SectionThree backgroundColor="var(--red800-color)" />
      </Slide>
    </FullPage>
    // <>
    //   <SectionOne />
    //   <SectionTwo />
    //   <SectionThree />
    // </>
  );
}

export default fullPage;
