"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Kanit } from "next/font/google";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const projects = [
  {
    id: "01",
    title: "Spillr – Anonymous Messaging Platform",
    description:
      "Spillr is a full-stack web app where users create public walls to receive anonymous messages. Built with modern frontend and backend tooling.",
    image: "/spillr.png",
    liveLink: "https://www.spillr.live/",
    githubLink: "https://github.com/irunonironic/spillr",
  },
];

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className={`w-full bg-black text-white py-24 ${kanitFont.className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="mb-20 text-center text-3xl md:text-4xl font-semibold"
        >
          My <span className="font-extrabold">Projects</span>
        </motion.h2>

        <div className="flex flex-col gap-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
            >
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full max-w-[520px] aspect-[18/10] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.a>

              {/* Text */}
              <div
                className={`flex flex-col ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <span className="mb-4 text-4xl font-bold text-white/70">
                  {project.id}
                </span>

                <h3 className="mb-4 text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-6 max-w-md text-sm md:text-base text-white/60 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition"
                    >
                      GitHub
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
