"use client";

import { useState } from "react";

import SearchBar from "./search-bar";
import Select from "./select";

const options = {
  anime: "Anime",
  manga: "Manga",
  characters: "Characters",
  staff: "Staff",
  studios: "Studios",
  users: "Users",
};

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
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

      <div className="p-6">
        <SearchBar
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          onDelete={() => setSearchText("")}
        />
      </div>
    </section>
  );
};

export default Search;
