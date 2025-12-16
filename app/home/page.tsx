"use client"

import type React from "react"
import Image from "next/image"
import { Kanit } from "next/font/google"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn, FaDiscord , } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6"

const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
})

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const imageFade = {
  hidden: { opacity: 0, scale: 0.96, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}


const Hero = () => {
  return (
    <section className={` id="home" w-full bg-white text-black  pb-20 ${kanitFont.className}`}>
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-10 md:py-14">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="order-2 md:order-1">
            <motion.h1
              variants={fadeUp}
              className="text-xl md:text-3xl font-semibold mb-2"
            >
              Hello I&apos;m{" "}
              <span className="font-extrabold">Anuja Vibhute.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-4">
              <div className="text-5xl md:text-7xl font-extrabold leading-[0.95]">
                Frontend
              </div>

              <div
                className="text-5xl md:text-7xl font-extrabold leading-[0.95] text-transparent"
                style={{
                  WebkitTextStroke: "2px black",
                }}
              >
                Developer
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-sm md:text-base text-gray-600 leading-relaxed mb-6"
            >
              I design and build clean, responsive web interfaces with a strong
              focus on usability, performance, and visual clarity. Currently
              focused on frontend development using modern tools and frameworks.
            </motion.p>

            <motion.div
              variants={stagger}
              className="flex gap-3"
            >
              <motion.div variants={fadeUp}>
                <SocialIcon
                  href="https://github.com/irunonironic"
                  icon={<FaGithub size={18} />}
                />
              </motion.div>
                <motion.div variants={fadeUp}>
                <SocialIcon
                  href="mailto:anuja45v@gmail.com"
                  icon={<SiGmail size={18} />}
                />
                </motion.div>
              <motion.div variants={fadeUp}>
                <SocialIcon
                  href="https://x.com/irunonironic"
                  icon={<FaXTwitter size={18} />}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <SocialIcon
                  href="https://discord.com/users/cinnamon_12xy_83176"
                  icon={<FaDiscord size={18} />}
                />
                
              </motion.div>
              <motion.div variants={fadeUp}>
                <SocialIcon
                  href="https://linkedin.com/in/anuja-vibhute"
                  icon={<FaLinkedinIn size={18} />}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={imageFade}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[460px] aspect-square">
              <Image
                src="/pic.png"
                alt="Profile Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode
  href: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex h-10 w-10 items-center justify-center
      rounded-md border-2 border-black
      bg-white text-black
      transition
      hover:bg-black hover:text-white
    "
  >
    {icon}
  </a>
)

export default Hero
