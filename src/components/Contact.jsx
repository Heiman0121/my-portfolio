import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import { BsWhatsapp } from "react-icons/bs";

import { MdOutlineEmail } from "react-icons/md";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0twgsxm",
        "template_icy5jza",
        form.current,
        "lHMugTJQImsmDJUNk",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Done!");
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-start items-center">
            <div>
              <h4 className="text-[45px] uppercase text-white font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
            </div>
            <div className="pt-20 pb-10 items-center">
              <h4 className="text-[45px] uppercase text-white font-medium mb-2 tracking-wide">
                WhatsApp
              </h4>
              <a
                href="https://wa.me/61401519728"
                className="flex flex-row text-[25px] text-white font-medium mb-2 tracking-wide mx-auto">
                {" "}
                Send a Message
                <BsWhatsapp />
              </a>
            </div>
            <div className="py-10 items-center">
              <h4 className="text-[45px] uppercase text-white font-medium mb-2 tracking-wide">
                Email
              </h4>
              <a
                href="mailto:hoiheiyeung@gmail.com"
                className="flex flex-row text-[25px] text-white font-medium mb-2 tracking-wide mx-auto">
                {" "}
                Send a Message
                <MdOutlineEmail />
              </a>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewports={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-primary transtion-all"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full 
              placeholder:text-white focus:border-primary transtion-all"
              type="text"
              placeholder="Your Email"
              name="email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full 
              placeholder:text-white focus:border-primary transtion-all resize-none mb-12"
              type="text"
              name="message"
              placeholder="Your Message"></textarea>
            <button className="btn btn-lg" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
