import React from "react";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import {
  InView,
  useInView,
} from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import technologies from "./Tech";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section mt-20" id="about" ref={ref}>
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
              in designing, developing, and implementing
              applications using various technologies and
              programming languages, I am eager to take on a
              challenging role that will enable me to
              leverage my broad development experience and
              technical expertise. I am also passionate
              about mentoring and empowering early career
              talents to become future leaders in the IT
              industry. With a creative mindset and a strong
              drive to challenge the status quo, I am always
              looking for opportunities to build innovative
              solutions.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={1.5}
                      duration={8}
                      decimals={1}
                    />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={20}
                      duration={5}
                    />
                  ) : null}{" "}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <Link to="contact">
                  <button className="btn btn-lg">
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
