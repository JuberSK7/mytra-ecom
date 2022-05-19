import React from "react";

import Image from "../../images/about.webp";
import Img1 from "../../images/img1.webp";
import Img2 from "../../images/img2.webp";
import Img3 from "../../images/img3.webp";
import Img4 from "../../images/img4.webp";
import Img5 from "../../images/im5.webp";
import Img6 from "../../images/img6.webp";
import Img7 from "../../images/img7.webp";
import Img8 from "../../images/img8.webp";

import { MianDivision, SubDivision, Heading } from "./style";

interface Props {}

export const About = (props: Props) => {
  return (
    <div>
      <MianDivision>
        <img src={Image} alt="about" />
      </MianDivision>
      <SubDivision>
        <Heading>
          {" "}
          <h1>DEAL OF THE DAY</h1>{" "}
        </Heading>

        <img src={Img1} />
        <img src={Img2} />
        <img src={Img3} />
        <img src={Img4} />
        <img src={Img5} />
        <img src={Img6} />
        <img src={Img7} />
        <img src={Img8} />
      </SubDivision>

      <SubDivision>
        <Heading>
          {" "}
          <h1>DEAL OF THE DAY</h1>{" "}
        </Heading>

        <img src={Img1} />
        <img src={Img2} />
        <img src={Img3} />
        <img src={Img4} />
        <img src={Img5} />
        <img src={Img6} />
        <img src={Img7} />
        <img src={Img8} />
      </SubDivision>
    </div>
  );
};
