import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "UX/UI Design",
    description:
      "Create the user interface for an app, website, or other interactive media",
    link: "Learn more",
  },
  {
    name: "Full Stack Developer",
    description:
      "Responsible for developing, coding, installing, and maintaining software systems",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Promote your brand, reach your target audience, and grow your business.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section mt-20" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-white my-6">
              what I Do
            </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am also a Freelance Front End Developer with
              over year experience.
            </h3>
            <Link to="contact">
              <button className="btn btn-sm">
                See my work
              </button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <Link to="contact">
                      <div className="flex flex-col flex-1 items-end">
                        <a
                          href="#"
                          className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                          <BsArrowUpRight />
                        </a>
                        <a
                          href="#"
                          className="text-gradient text-sm">
                          {link}
                        </a>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
