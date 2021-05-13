import React, { useRef, useState } from "react";
import Project from "../Components/Project";
import { Projects as myProjects } from "../data/project";
import rightArrow from '../assets/images/right-arrow.svg';

const Projects = () => {
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
    <div 
      ref={projectRef}
      className="projects"
    >
      <Project projet={projects[currentProjet]} />
      <div className="arrow-right">
        <img onClick={changeProjet} src={rightArrow} alt="" />
      </div>
    </div>
  );
};

export default Projects;
