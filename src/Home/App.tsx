import React from "react";
import { Navbar } from "../app/Navbar/navbar";
import { About } from "../Component/About/about";
import { Hero } from "../Component/Hero/hero";

import { Container } from "./style";

interface Props {}

export const Home = (props: Props) => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
    </Container>
  );
};
