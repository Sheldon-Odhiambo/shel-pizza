import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../sidebar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./Heroelement";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Shel's Pizza</HeroH1>
          <HeroP>Ever Ready</HeroP>
          <HeroBtn>Place your Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;