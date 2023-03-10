import React from "react";

import Img1 from "../assets/project.png";
import Img2 from "../assets/project-2.png";
import Img3 from "../assets/mernProject.png";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section min-h-[640px]" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-gradient mb-28">
                View all projects
              </h2>
              <p className="max-w-sm mb-28">
                Here is my TypeScript MERN CRUD AWS Project
              </p>
            </div>
            <div className="group relative overflow-hidden border-2 rounded-xl border-white/50 lg:h-[300px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <a href="https://mern-project-ujkp.onrender.com">
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt="FrontPage"
                />
              </a>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  Mern Blog
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  MERN + CRUD + AWS Blog
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-10 mb-10 mt-1">
            <div className="group relative overflow-hidden border-2 rounded-xl border-white/50 lg:h-[300px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt="FrontPage"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  My Personal Project
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Okla
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 rounded-xl border-white/50 lg:h-[300px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="FrontPage"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  UI/UX Design
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Mining Page
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
