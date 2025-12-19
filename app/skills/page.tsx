"use client";

import { Kanit } from "next/font/google";
import { motion, type Variants } from "framer-motion";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const skills = {
  frontend: ["JavaScript", "React", "Next.js", "Tailwind CSS", "CSS"],
  backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase"],
  tools: ["Git", "GitHub", "REST APIs", "MERN Stack", "PERN Stack"],
};

const container: Variants = {
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

export default function Skills() {
  return (
    <section
      id="skills"
      className={`w-full bg-white text-black py-16 ${kanit.className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center text-3xl md:text-4xl font-semibold"
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          <SkillBlock title="Frontend" items={skills.frontend} />
          <SkillBlock title="Backend & Databases" items={skills.backend} />
          <SkillBlock title="Tools & Stack" items={skills.tools} />
        </motion.div>
      </div>
    </section>
  );
}

function SkillBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <motion.div variants={item} className="w-full">
      <h3 className="mb-6 text-xl font-semibold text-center sm:text-left">
        {title}
      </h3>

      <div className="mx-auto max-w-[420px] sm:max-w-none">
        <div className="flex flex-wrap gap-3">
          {items.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              className="
                text-white bg-black
                flex items-center justify-center
                rounded-lg
                py-2 px-2
                text-sm font-medium
                hover:bg-neutral-700 hover:text-white
                transition
              "
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
