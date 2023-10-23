// import { useState, useEffect } from 'react';
// import './App.css';

// const name = null;
// const greet = 'dear'
//  const isShowning  = true;
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   useEffect(() => {
//     alert('you have changed the count to ' + counter   )
//   }, [{counter}])
//   return (
//     <div className="App">
// <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

// <h1>{counter}</h1>

// <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
// <button onClick={() => setCounter((prevCount) => prevCount = 0)}>Clear</button>
// {/* <h1>hello { isShowning ? greet : "someone"}</h1>
//     {
//       name ? (
//         <div>
//           test
//         </div>
//       ):(
//         <div>
//         <h1>hello</h1>        
//         <h1>there is no name</h1>
//         </div>
//         )
//     } */}    
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./logo.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
console.log(data)
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>TestFlix</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;