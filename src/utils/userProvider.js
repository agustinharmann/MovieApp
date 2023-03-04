import { createContext, useCallback, useEffect, useState } from 'react';
import { API_KEY } from './secret';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);


  const getTrendingMovies = async () => {
    const r = await fetch(`https://api.themoviedb.org/3/trending/movie/day?${API_KEY}`)
    const data = await r.json()
    const { results } = data;
    setMovies(results);
    setLoading(false);
  };

  const getGenresMovies = async () => {
    const r = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`);
    const data = await r.json();
    const { genres } = data;
    setGenres(genres);
    setLoading(false);
  };
  

  const getMovie = useCallback(async (id) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?${API_KEY}`);
    const data = await request.json();
    setMovie(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getGenresMovies();
    getTrendingMovies();
  }, []);

  return (
    <UserContext.Provider
      value={{
        movie,
        movies,
        getMovie,
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
