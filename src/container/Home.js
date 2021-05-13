import React, { useState } from "react";
import Cursor from "../Components/Cursor";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";
import rightArrow from "../assets/right_arrow.svg";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const Home = () => {
  const screenWidth = useState(window.innerWidth);
  return (
    <>
      {screenWidth > 600 && (
        <Cursor />
      )}
      <motion.div
        exit={{ y: "50%", opacity: 0 }}
        initial={{ y: "50%", opacity: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={transition}
        className="home-content"
      >
        <h2>
          Hello, je suis <span> Seryl Lounis. </span>
        </h2>
        <div className="typed-text">
          <p>
            Développeur{"  "}
            <Typed
              showCursor={false}
              style={{ color: "#0d7377", fontFamily: "Fauna, sans-serif" }}
              strings={[" Front-end", " Back-End", " Fullstack."]}
              typeSpeed={140}
            />
          </p>
        </div>
        <NavLink className="btn-see-more" exact to="/projects">
          <h4>Voir mon Travail </h4>
          <img
            className="right-arrow"
            alt="fleche droite"
            src={rightArrow}
          ></img>
        </NavLink>
      </motion.div>
    </>
  );
};

export default Home;
