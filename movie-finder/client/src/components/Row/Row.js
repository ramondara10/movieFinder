import React, { useState, useEffect } from "react";
import axios from "../../utils/API";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";
// import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleClick = (movie) => {
    console.log(movie?.title);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


  // const  VideoCard= forwardRef(({ movie }, ref) => {
  return (

      <div className="row">
        <h2 className="title">{title}</h2>
        <div className="posters">
          {movies.map((movie) => {
            return (
              // <div ref={ref} className="videoCard">
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`poster ${isLarge && "row-posterLarge"}`}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
                /* <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
                /> */
              //  </div>
            );
          })};
        </div>
        <div style={{ padding: "40px" }}>
        {/* <h2>{movie.title || movie.original_name}</h2> */}
            {/* <p className="videoCard-stats">
                {movie.media_type && `${movie.media_type} . `}
                {movie.release_date || movie.first_air_date} .
            </p> */}

          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

      </div>

  );
  
}

export default Row;
