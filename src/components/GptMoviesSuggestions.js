import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black m-5 mt-[15%]">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};
export default GptMovieSuggestions;
