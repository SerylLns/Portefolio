import React, { useRef, useState } from "react";
import Project from "../Components/Project";
import { Projects as myProjects } from "../data/project";
import rightArrow from '../assets/images/right-arrow.svg';
import { motion } from "framer-motion";

const Projects = () => {
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  const projects = myProjects;
  const [currentProjet, setCurrentProjet] = useState(0)
  

  const projectRef = useRef();

  const changeProjet = () => {
    if (currentProjet >= projects.length -1) {
      setCurrentProjet(0);
    } else {
      setCurrentProjet(currentProjet + 1);
    }
  }


  return (
    <div ref={projectRef} className="projects">
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={transition}
      >
        <Project projet={projects[currentProjet]} />
      </motion.div>
      <div className="arrow-right">
        <img onClick={changeProjet} src={rightArrow} alt="" />
      </div>
    </div>
  );
};

export default Projects;
