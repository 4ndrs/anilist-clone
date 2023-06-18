"use client";

import Select from "./select";

const options = {
  anime: "Anime",
  manga: "Manga",
  characters: "Characters",
  staff: "Staff",
  studios: "Studios",
  users: "Users",
};

const Search = () => (
  <section>
    <div className="relative flex items-center gap-2 text-[2rem] font-bold text-slate-600 dark:text-slate-400">
      Browse
      <div className="relative -top-[0.14rem]">
        <Select
          options={options}
          defaultValue="anime"
          onChange={(value) => console.log("ayo", value)}
        />
      </div>
    </div>
  </section>
);

export default Search;
