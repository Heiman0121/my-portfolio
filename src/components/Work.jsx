import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Img2 from "../assets/project-2.png";
import Img3 from "../assets/mernProject.png";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex flex-row gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-gradient mb-5">
                View all projects
                <br />
              </h2>
              <p className="text-xl leading-tight text-white mb-5">
                Each project is a unique piece of
                development
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col lg:flex-row gap-y-12 mb-20 lg:mb-10 ">
            <div className="group relative overflow-hidden border-2 rounded-xl border-white/50 lg:h-[280px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <a href="https://mern-project-ujkp.onrender.com">
                <img
                  className="group-hover:scale-125 transition-all duration-500 lg:w-[600px]"
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
                Feel free to click on this
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-12 lg:ml-10 ">
              <p className="text-3xl text-white text-justify">
                A Moden MERN Blog
              </p>
              <p className="text-2xl text-white text-justify">
                using MongoDB Express React Node Js <br />
                with Create Read Update Delete function
                <br />
                AWS S3 storage
                <br />
                <div className="flex flex-row mx-5">
                  <p className="mx-2">Code</p>
                  <a href="https://github.com/Heiman0121/Mern-project">
                    <FaGithub />{" "}
                  </a>
                </div>
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-y-12 ml-10 ">
              <p>
                Key outcomes:
                <li>Streamlined content creation</li>
                <li>Increased user interaction</li>
                <li> Efficient data handling</li>
                <li>Secure authentication </li>
                <li>Scalablearchitecture</li>
                <li>AWS implementation</li>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex flex-col lg:flex-row flex-1 gap-y-10 mb-10 mt-1">
            <div className="flex flex-col gap-y-12 mt-10">
              <p className="text-3xl text-white text-justify">
                My side Project OKLA
              </p>
              <p className="text-2xl text-white text-justify">
                using React TypeScript Express <br />
                Node AWS Amplify
                <br />
              </p>
            </div>
            <div className="flex flex-col gap-y-12 mx-10 mt-10">
              <p>
                Key outcomes:
                <li>Google API integration</li>
                <li>TypeScript expertise</li>
                <li>AWS Serverless implementation</li>
                <li>Full Responsive UI</li>
              </p>
            </div>
            <div className="group relative overflow-hidden border-2 rounded-xl border-white/50 lg:h-[300px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 lg:w-[600px]"
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
            {/* <div className="group relative overflow-hidden border-2 rounded-xl border-white/50 lg:h-[300px]">
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
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
