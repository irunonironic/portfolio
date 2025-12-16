"use client"

import { Kanit } from "next/font/google"
import { Copyright } from "lucide-react"

const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["300"],
})

const CURRENT_YEAR = 2025 

const Footer = () => {
  return (
    <footer id="footer"
      className={`w-full bg-black text-white border-t border-white/20 ${kanitFont.className}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <p className="flex items-center gap-2 text-sm md:text-base text-white/60">
          <Copyright className="h-4 w-4 text-white/70" />
          <span>{CURRENT_YEAR} Anuja Vibhute</span>
        </p>


      </div>
    </footer>
  )
}

export default Footer
