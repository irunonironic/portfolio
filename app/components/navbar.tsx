"use client";

import Link from "next/link";
import Image from "next/image";
import { Patrick_Hand } from "next/font/google";
import CatLogoSVG from "./catLogo";

const handFont = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  { name: "home", href: "#home", mobile: true },
  { name: "projects", href: "#projects", mobile: true },
  { name: "skills", href: "#skills", mobile: false },
  { name: "contact", href: "#contact", mobile: true},
];

const navLinkClass =
  "text-base font-semibold whitespace-nowrap hover:opacity-70 transition flex-shrink-0";

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
            {/* MOBILE */}
            <div className="flex w-full items-center justify-center gap-3 flex-wrap sm:hidden ">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${navLinkClass} ${
                    link.mobile ? "block" : "hidden"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://buymeacoffee.com/irunonironic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:opacity-80 transition pl-4"
              >
                <Image
                  src="/bmc.png"
                  alt="Buy Me a Coffee"
                  width={14}
                  height={14}
                />
                <span className="text-sm font-semibold leading-none">
                  Buy me a coffee
                </span>
              </a>
            </div>

            {/* DESKTOP  */}
            <div className="hidden sm:flex w-full items-center">

              <div className="absolute inset-0 flex items-center justify-center gap-4 pointer-events-none">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`${navLinkClass} pointer-events-auto`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="ml-auto flex items-center gap-2">
                <a
                  href="https://buymeacoffee.com/irunonironic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition cursor-pointer"
                >
                  <Image
                    src="/bmc.png"
                    alt="Buy Me a Coffee"
                    width={18}
                    height={18}
                  />
                  <span className="text-base font-semibold leading-none">
                    Buy me a coffee
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
