import { motion } from "framer-motion";
import React from "react";
import { animateSlider, animateSlideright, pageAnimation } from "../animation";
import Education from "../components/Education";
import Experiance from "../components/Experiance";
import Footer from "../components/Footer";
import styled from "styled-components";
import Header from "../components/Header";

import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import SliderFrames from "../components/SliderFrames";
const Main = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SliderFrames />
      <motion.div variants={animateSlideright} initial="hidden" animate="show">
        <Header />
        <Education />
        <Experiance />
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default Main;
