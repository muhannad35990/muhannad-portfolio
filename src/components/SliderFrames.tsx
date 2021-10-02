import React from "react";
import man from "../images/general/manRun.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animateSlider, animateSliderContainer } from "../animation";
const SliderFrames = () => {
  return (
    <motion.div
      variants={animateSliderContainer}
      initial="hidden"
      animate="show"
    >
      <Frame1 variants={animateSlider} />
      <Frame2 variants={animateSlider} />
      <Frame3 variants={animateSlider} />
      <Frame4 variants={animateSlider} />
    </motion.div>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 7%;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: #fffebe;
`;
const Frame2 = styled(motion.div)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
export default SliderFrames;
