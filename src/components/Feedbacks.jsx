import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image, date }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 flex flex-col p-6 rounded-3xl xs:w-[320px] w-full h-[400px]"
  >
    <p className="text-5xl text-white font-black">{image}</p>

    <div className="flex-1 flex flex-col pt-6">
      <p className="tracking-wider text-lg">{testimonial}</p>

      {/* Footer Section at the Bottom */}
      <div className="mt-auto">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
        <p className="mt-1 text-secondary text-[12px]">{date}</p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => (
  <div className="mt-12 bg-black-100 rounded-[20px]">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've Learned</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
    </div>

    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "");
