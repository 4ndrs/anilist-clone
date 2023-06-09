"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";

import HamburgerSVG from "./hamburger-svg";
import CommentsSVG from "./comments-svg";
import UserPlusSVG from "./user-plus-svg";
import SearchSVG from "./search-svg";
import SignInSVG from "./sign-in-svg";
import UsersSVG from "./users-svg";
import CloseSVG from "./close-svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed bottom-6 right-5 lg:sticky lg:inset-x-0 lg:top-0 lg:bg-blue-950">
      <button
        aria-label="open menu"
        onClick={() => setShowMenu(true)}
        className={`${
          showMenu ? "hidden" : "block"
        } h-[3.13rem] w-[3.13rem] rounded-md bg-white drop-shadow-2xl lg:hidden`}
      >
        <HamburgerSVG className="mx-auto h-8 w-10 fill-sky-400" />
      </button>

      <nav>
        <menu
          className={`${
            showMenu ? "grid" : "hidden"
          } relative h-[9.4rem] w-[13.13rem] grid-cols-3 place-items-center rounded-md bg-white p-2 text-xs font-bold text-slate-400 drop-shadow-2xl lg:mx-auto lg:flex lg:h-[4.25rem] lg:w-auto lg:max-w-5xl lg:justify-center lg:bg-transparent lg:text-sm lg:capitalize lg:drop-shadow-none`}
        >
          {[
            { name: "forum", icon: CommentsSVG, href: "#" },
            { name: "social", icon: UsersSVG, href: "#" },
            { name: "search", icon: SearchSVG, href: "#" },
            { name: "sign up", icon: UserPlusSVG, href: "#" },
            { name: "login", icon: SignInSVG, href: "#" },
          ].map((link) => (
            <li
              key={link.name}
              className="group lg:[&:nth-child(1)]:order-3 lg:[&:nth-child(2)]:order-2 lg:[&:nth-child(3)]:order-1 lg:[&:nth-child(4)]:order-5 lg:[&:nth-child(5)]:order-4 lg:[&:nth-child(5)]:ml-[4.4rem]"
            >
              <Link
                href={link.href}
                /* TODO: add custom shadow to tailwind.config.js */
                className="group flex flex-col items-center gap-2 lg:px-4 lg:py-[1.13rem] lg:transition-colors lg:hover:text-slate-300 lg:group-[:nth-child(4)]:rounded-md lg:group-[:nth-child(4)]:bg-blue-600 lg:group-[:nth-child(4)]:px-[0.94rem] lg:group-[:nth-child(4)]:py-[0.63rem] lg:group-[:nth-child(4)]:text-white lg:group-[:nth-child(4)]:transition-transform  lg:group-[:nth-child(4)]:duration-500 lg:group-[:nth-child(4)]:hover:scale-105 lg:group-[:nth-child(4)]:hover:shadow-2xl lg:group-[:nth-child(4)]:hover:shadow-blue-500"
              >
                <link.icon className="h-6 w-6 group-hover:fill-sky-400 lg:hidden" />
                {link.name}
              </Link>
            </li>
          ))}
          <li className="lg:hidden">
            <button aria-label="close menu" onClick={() => setShowMenu(false)}>
              <CloseSVG className="h-6 w-6" />
            </button>
          </li>
          <li className="absolute left-0 top-1/2 order-none hidden -translate-y-1/2 px-3 lg:block">
            <Link aria-label="home page" href="/">
              <Image alt="anilist logo" src={Logo} width={50} height={50} />
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
