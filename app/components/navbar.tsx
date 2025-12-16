"use client";
import Link from "next/link"
import { Patrick_Hand } from "next/font/google"
import CatLogoSVG from "./catLogo"

const handFont = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
})

const links = [
  { name: "home", href: "#home" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
  { name: "contact", href: "#contact" },
]

const navLinkClass =
  "text-base font-semibold whitespace-nowrap hover:opacity-70 transition flex-shrink-0"

const Navbar = () => {
  return (
    <nav className={`sticky top-0 z-50 h-[64px] w-full ${handFont.className}`}>
      <div className="mx-auto max-w-6xl px-4 py-2 sm:py-3">
        <div className="flex items-center">

          {/* CAT */}
          <div className="relative z-20 flex-shrink-0 -mr-4 animate-cat-idle">
            <CatLogoSVG className="h-[80px] w-auto" />
          </div>

          {/* LINE BAR */}
          <div
            className="
              relative z-10
              flex h-[40px] flex-1 items-center
              border-y-3 border-black
              bg-white
              pl-4 sm:pl-12
              pr-3
              -ml-6
            "
          >
         
            <div className="flex w-full items-center justify-center gap-6 overflow-x-auto no-scrollbar">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={navLinkClass}
                >
                  {link.name}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
