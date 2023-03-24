import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import technologies from "./Tech";

const About = () => {
  return (
    <section className="section mt-20" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex-1 lg:mb-0">
            <h2 className="h2 text-accent">Experience</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center py-8 px-12 lg:px-0">
              {technologies.map(
                ({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img
                      src={src}
                      alt=""
                      className="w-20 mx-auto"
                    />
                    <p className="mt-4">{title}</p>
                  </div>
                ),
              )}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              I am a Full Stack Developer with over a year
              of hands-on experience
            </h3>
            <p className="mb-6">
              Designing, developing and implementing
              applicaitons and solutions using adiverser
              rnage of technologies and programming
              languages.Processing an uncesaingly creative
              mindset, I am committed to challenging the
              status quo and constructing innivative
              solutions. I am also a team player who thrives
              in collaborating with cross functional teams
              to produce outstaning applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
