import React from "react";
import Image from "../../images/hero.png";
import Image2 from "../../images/hero2.gif";

import { MainContainer, Section, Slide1, Slide2 } from "./style";

interface Props {}

export const Hero = (props: Props) => {
  return (
    <div>
      <MainContainer>
        <Section>
          <Slide1>
            <img src={Image} alt="hero" />
          </Slide1>

          <Slide2>
            <img src={Image2} alt="hero2" />
          </Slide2>
        </Section>
      </MainContainer>
    </div>
  );
};
