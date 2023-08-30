"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import SocialMedia from "../SocialMedia";
const Footer = () => {
  const count = useMotionValue(2000);
  const rounded = useTransform(count, Math.round);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const animation = animate(count, 2023, { duration: 6 });
    return animation.stop;
  }, [count, isInView]);
  return (
    
    <div className="flex flex-col md:flex-row justify-between  -mb-20 gap-4 mt-20  bg-zinc-900">
      <SocialMedia
        parentStyles={"flex gap-3"}
        iconStyles={
          "ci-xl transition-transform duration-300 transform-gpu group-hover:scale-125 group-hover:rotate-12"
        }
        childStyles={"bg-white rounded-full w-12 h-12 border app__flex shadow"}
      />
      <aside className="mb-2">
        <div className="flex items-baseline ">
          <p className="font-pacifico text-cyan-500">@</p>
          <motion.p
            onViewportEnter={() => setIsInView(true)}
            className="font-pacifico text-cyan-500"
          >
            {rounded}
          </motion.p>
          <p className="ml-1 font-dancing-script text-green-500">Dheeresh</p>
        </div>
        <p className="font-dancing-script text-green-500">All rights reserved</p>
      </aside>
     
    </div>
  );
};

export default Footer;
