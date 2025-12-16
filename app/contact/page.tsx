"use client";

import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Kanit } from "next/font/google";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";

const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Contact = () => {
  return (
    <section id="contact"
      className={`w-full bg-black text-white py-24 ${kanitFont.className}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Get in <span className="text-white/70">Touch</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-xl text-white/60 mb-10"
        >
          Want to collaborate, ask a question, or just say hi? You can find me
          here.
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={stagger}
          className="flex justify-center gap-5"
        >
          <SocialIcon
            icon={<FaGithub size={20} />}
            href="https://github.com/irunonironic"
          />
         
           <SocialIcon
              href="mailto:anuja45v@gmail.com"
              icon={<SiGmail size={18} />}
           />

          <SocialIcon
            icon={<FaXTwitter size={20} />}
            href="https://x.com/irunonironic"
          />

          <SocialIcon
            icon={<FaDiscord size={22} />}
            href="https://discord.com/users/cinnamon_12xy_83176"
          />


          <SocialIcon
            icon={<FaLinkedinIn size={20} />}
            href="https://linkedin.com/in/anuja-vibhute"
          />

        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <motion.a
    variants={fadeUp}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="
      h-12 w-12 flex items-center justify-center
      rounded-md border-2 border-white
      text-white
      hover:bg-white hover:text-black
      transition-colors
    "
  >
    {icon}
  </motion.a>
);

export default Contact;
