"use client";

import { Kanit } from "next/font/google";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const skills = {
  frontend: ["JavaScript", "React", "Next.js", "Tailwind CSS", "CSS"],
  backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase"],
  tools: ["Git","GitHub" , "REST APIs", "MERN Stack" , "PERN Stack"],
};

const container:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1], 
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className={` w-full bg-white text-black py-18 ${kanit.className}`}>
      <div className="mx-auto max-w-6xl px-30">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center text-3xl md:text-4xl font-semibold"
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Groups */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          <SkillBlock title="Frontend" items={skills.frontend} />
          <SkillBlock title="Backend & Databases" items={skills.backend} />
          <SkillBlock title="Tools & Stack" items={skills.tools} />
        </motion.div>
      </div>
    </section>
  );
};

const SkillBlock = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <motion.div variants={item}>
    <h3 className="mb-6 text-xl font-semibold">{title}</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {items.map((skill) => (
        <motion.div
          key={skill}
          variants={item}
          className="
            text-white bg-black
            flex items-center justify-center
            rounded-lg border border-black
            py-2.5 sm:py-2
            text-sm font-medium
            hover:bg-white hover:text-black
            transition
          "
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
