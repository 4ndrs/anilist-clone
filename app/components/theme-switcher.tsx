"use client";

const ThemeSwitcher = () => {
  const handleClick = (theme: "default" | "dark" | "system") => {
    switch (theme) {
      case "default":
        document.documentElement.classList.remove("dark");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "system":
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        break;
    }
  };

  return (
    <div>
      <h1 className="mb-3 font-bold text-sky-400">Site Theme</h1>
      <ul className="flex gap-5">
        <li>
          <button
            aria-label="default"
            onClick={() => handleClick("default")}
            className="relative h-[1.57rem] w-[1.57rem] rounded-[3px] border-[2px] border-slate-500 bg-white text-slate-900"
          >
            <span className="absolute left-[0.15rem] top-[0.1rem]">A</span>
          </button>
        </li>
        <li>
          <button
            aria-label="Dark"
            onClick={() => handleClick("dark")}
            className="relative h-[1.57rem] w-[1.57rem] rounded-[3px] border-[2px] border-slate-500 bg-slate-900 text-slate-400"
          >
            <span className="absolute left-[0.15rem] top-[0.1rem]">A</span>
          </button>
        </li>
        <li>
          <button
            aria-label="System Theme"
            onClick={() => handleClick("system")}
            className="relative h-[1.57rem] w-[1.57rem] overflow-hidden rounded-[3px] border-[2px] border-slate-500 bg-slate-900 text-slate-400"
          >
            <span className="absolute -inset-x-2 inset-y-0 -translate-y-1/3 translate-x-1/4 rotate-45 bg-white" />
            <span className="absolute left-[0.15rem] top-[0.1rem]">A</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
