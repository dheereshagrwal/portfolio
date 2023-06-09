"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const About = () => {
  const [skills, setSkills] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 xl:gap-24 mt-4 xl:mt-0">
      <h2 className="font-dm-sans text-4xl xl:text-5xl font-semibold text-gray-700 text-center leading-tight">
        This is{" "}
        <span className="font-dm-sans text-violet-800">my playground,</span>{" "}
        what about <span className="font-dm-sans text-violet-800">yours?</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-14">
        {skills.map((skill, index) => (
          <motion.div
            className="hvr-forward flex flex-col w-64 gap-4"
            key={skill.title + index}
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <img
              src={urlFor(skill.image)}
              alt={skill.title}
              onLoad={() => setIsLoaded(true)}
              className="rounded-3xl object-cover h-48 w-full"
            />
            <h2 className="font-poppins font-semibold text-violet-950 text-lg">
              {skill.title}
            </h2>
            <p className="font-dm-sans text-gray-800">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "about"), "about", "bg-white");
