import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movie, setMovie] = useState([]);
  const [ idMovie, setIdMovie ] = useState();
  const [loading, setLoading] = useState(true);

  
  const getTrendingMovies = async () => {
    const r = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=1a517c5eba4e80c7deb7008273c36d4d')
    const data = await r.json()
    const { results } = data;
    setMovies(results);
    setLoading(false)
  }

  const getGenresMovies = async () => {
    const r = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=1a517c5eba4e80c7deb7008273c36d4d');
    const data = await r.json();
    const { genres } = data;
    setGenres(genres);
    setLoading(false)
  }

// 

  useEffect(() => {
    getGenresMovies();
    getTrendingMovies();
  }, []);

  
  
  const getMovie = async (id) => {
    const r = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1a517c5eba4e80c7deb7008273c36d4d`);
    const data = await r.json();
    console.log(data);
    // setMovie(data)
    setLoading(false)
  }
  
  // console.log(idMovie);
  
  
  return (
    <UserContext.Provider
    value={{
      movie,
        movies,
        getMovie,
        idMovie,
        setIdMovie,
        genres,
        loading
      }}
      >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { UserProvider };
