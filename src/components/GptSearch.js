import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  const [trendup, setTrendUp] = useState(false);

  const handleTrendingAndUp = () => {
    setTrendUp(!trendup);
  };

  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>

      <GptSearchBar />
      <button
        className="mt-[6%] px-6 py-3 text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 ml-[40%]"
        onClick={handleTrendingAndUp}
      >
        Trending & Upcoming Movies
      </button>

      <div className="bg-black">{trendup ? <GptMoviesSuggestions /> : []}</div>
    </div>
  );
};

export default GptSearch;
