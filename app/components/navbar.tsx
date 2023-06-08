"use client";

import { useState } from "react";
import Link from "next/link";

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
    <header className="fixed bottom-6 right-5">
      <button
        aria-label="open menu"
        onClick={() => setShowMenu(true)}
        className={`${
          showMenu ? "hidden" : "block"
        } h-[3.13rem] w-[3.13rem] rounded-md bg-white drop-shadow-2xl`}
      >
        <HamburgerSVG className="mx-auto h-8 w-10 fill-sky-400" />
      </button>

      <nav>
        <menu
          className={`${
            showMenu ? "grid" : "hidden"
          } h-[9.4rem] w-[13.13rem] grid-cols-3 place-items-center rounded-md bg-white p-2 text-xs font-bold text-slate-400 drop-shadow-2xl`}
        >
          {[
            { name: "forum", icon: CommentsSVG, href: "#" },
            { name: "social", icon: UsersSVG, href: "#" },
            { name: "search", icon: SearchSVG, href: "#" },
            { name: "sign up", icon: UserPlusSVG, href: "#" },
            { name: "login", icon: SignInSVG, href: "#" },
          ].map((link) => (
            <li key={link.name} className="group">
              <Link
                href={link.href}
                className="flex flex-col items-center gap-2"
              >
                <link.icon className="h-6 w-6 group-hover:fill-sky-400" />
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button aria-label="close menu" onClick={() => setShowMenu(false)}>
              <CloseSVG className="h-6 w-6" />
            </button>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
