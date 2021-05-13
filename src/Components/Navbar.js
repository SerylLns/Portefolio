import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, scale: 1, x: 0, y: 0 },
  closed: { opacity: 1, scale: 0, x: "100%", y: "-100%" },
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      {screenWidth > 500 ? (
        <nav className="navbar">
          <ul>
            <NavLink exact to="/">
              <li>
                Accueil <span></span>
              </li>
            </NavLink>
            <NavLink exact to="/projects">
              <li>
                Projets <span></span>
              </li>
            </NavLink>
            <NavLink exact to="/skill">
              <li>
                Compétences <span></span>
              </li>
            </NavLink>
            <NavLink exact to="/contact">
              <li>
                Contact<span></span>
              </li>
            </NavLink>
          </ul>
        </nav>
      ) : (
        <>
          <div
            className="hamburger"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
              toggleNav();
            }}
          >
            <div className={toggleMenu ? "barre-open" : "barre"}></div>
          </div>
          <motion.div
            className="mobile-menu"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            <ul
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
                toggleNav();
              }}
            >
              <NavLink exact to="/">
                <li>
                  Accueil <span></span>
                </li>
              </NavLink>
              <NavLink exact to="/projects">
                <li>
                  Projets <span></span>
                </li>
              </NavLink>
              <NavLink exact to="/skill">
                <li>
                  Compétences <span></span>
                </li>
              </NavLink>
              <NavLink exact to="/contact">
                <li>
                  Contact<span></span>
                </li>
              </NavLink>
            </ul>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
