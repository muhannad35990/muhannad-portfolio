import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../animation";
import Education from "../components/Education";
import Experiance from "../components/Experiance";
import Footer from "../components/Footer";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
const Main = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Header />
      <Education />
      <Experiance />
      <Skills />
    </motion.div>
  );
};

export default Main;
