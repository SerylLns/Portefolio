import React from "react";
import ProgressBar from "../Components/ProgressBar";
import Cv from '../assets/CVSerylLounis.pdf';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const Skill = () => {
  return (
    <motion.div
      className="skills-container"
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0.6,
        x: 300,
      }}
      transition={transition}
    >
      <h1>Mes Compétences</h1>
      <ul className="skills">
        <li>
          <p>Ruby On Rails</p>
          <ProgressBar progress={75} />
        </li>
        <li>
          <p>Javascript</p>
          <ProgressBar progress={70} />
        </li>
        <li>
          <p>Html/Scss</p>
          <ProgressBar progress={80} />
        </li>
        <li>
          <p>Git/GitHub</p>
          <ProgressBar progress={75} />
        </li>
        <li>
          <p>SQL</p>
          <ProgressBar progress={75} />
        </li>
        <li>
          <p>React</p>
          <ProgressBar progress={70} />
        </li>
        <li>
          <p>NodeJs/Express</p>
          <ProgressBar progress={55} />
        </li>
        <li>
          <p>MongoDB</p>
          <ProgressBar progress={50} />
        </li>
        <li>
          <p>Figma</p>
          <ProgressBar progress={30} />
        </li>
      </ul>
      <div className="btn-download">
        <button onClick={(e) => window.open(Cv, "_blank")}>
          <span>VOIR MON CV</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Skill;
