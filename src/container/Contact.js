import React, { useState } from 'react';
import githubImg from '../assets/images/github.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import emailImg from '../assets/images/email.svg';
import emailjs from "emailjs-com";
import messageIcon from '../assets/images/airplane.svg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }
  
  emailjs.init("user_ClitfKxnedM5qHmjPATUZ");

  const sendEmail = (e) => {
    setIsLoading(true);
     e.preventDefault();
    emailjs.send(
      "service_ccnv3il",
      "template_83koeio",
      {
        name: name,
        email: email,
        message: message,
      },
      "user_ClitfKxnedM5qHmjPATUZ"
    ).then((res) => {
      setIsLoading(false);
      resetForm();
      setModalSuccess(true);
    }).catch((err) => console.log(err));
  }


  const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -300,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 300,
      }}
      transition={transition}
    >
      {/* <ShootingStar /> */}
      <div className="contact-container">
        <div className="contact-right-part">
          <form onSubmit={(e) => sendEmail(e)}>
            <h5>Contactez moi</h5>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="nom"
              placeholder="Votre nom"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Votre email"
            />

            <textarea
              name="content"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Sujet..."
            ></textarea>
            <button type="submit">
              Envoyer
              <img src={messageIcon} alt="" />
            </button>
          </form>
        </div>
        <div className="social-media">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/seryllns"
          >
            <img src={linkedinImg} alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SerylLns"
          >
            <img src={githubImg} alt="" />
          </a>
          <a href="seryllounis@gmail.com">
            <img src={emailImg} alt="" />
          </a>
        </div>
      </div>
      {modalSuccess && (
        <div className="email-success">
          <p>Votre e-mail à était envoyer avec succès !!</p>
          <button onClick={() => setModalSuccess(false)}>Cool</button>
        </div>
      )}
      {isLoading && (
        <div className="loading-email">
          <div className="loading-content">
            <h3>Envoi en cours</h3>
            <Loader type="Plane" color="#FFFF" height={100} width={100} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;