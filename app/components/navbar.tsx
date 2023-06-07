import HamburgerSVG from "./hamburger-svg";

const Navbar = () => (
  <header className="fixed bottom-6 right-5">
    <button className="h-[3.13rem] w-[3.13rem] rounded-md bg-white drop-shadow-2xl">
      <HamburgerSVG className="mx-auto h-8 w-10 fill-sky-400" />
    </button>
    <nav></nav>
  </header>
);

export default Navbar;
