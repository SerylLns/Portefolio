import React from 'react';
import Carousel from "react-grid-carousel";
import { motion } from "framer-motion";

const Project = ({projet}) => {
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <motion.div
      className="projet-container"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <div className="left-part">
        <div className="head-card">
          <h3>{projet.title}</h3>
          <p>{projet.description}</p>
        </div>
        <br />
        <h5>Techno :</h5>
        <ul className="technos">
          {projet.techno.map((tech) => {
            return <li key={tech}>-{tech}</li>;
          })}
        </ul>
        <a target="_blank" rel="noreferrer" href={projet.url}>
          Voir le site
        </a>
      </div>
      <div className="right-part">
        <div className="carousel">
          <Carousel
            cols={1}
            rows={1}
            gap={1}
            autoplay={2000}
            dotColorActive={"#14ffec"}
            hideArrow
            key={projet.title}
            showDots
            loop
          >
            {projet.image.map((image) => {
              return (
                <Carousel.Item>
                  <img width="100%" key={image} alt="img" src={image} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;