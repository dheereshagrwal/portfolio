import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and chat with me</h2>
      <div className="app__contact-cards">
        <motion.div
          className="app__contact-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img src={images.email} alt="email" />
          <a href="mailto:da11@iitbbs.ac.in" className="p-text">
            da11@iitbbs.ac.in
          </a>
        </motion.div>
        <motion.div
          className="app__contact-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 9411245528" className="p-text">
            +91 9411245528
          </a>
        </motion.div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <motion.div
            className="app__flex"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </motion.div>
          <motion.div
            className="app__flex"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <input
              className="p-text"
              type="text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </motion.div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__white-bg"
);
