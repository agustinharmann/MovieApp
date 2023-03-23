import React, { createContext, useCallback, useEffect, useState } from 'react';
import { API_KEY } from '../utils/secret';

const UserContext = createContext();

const MoviesProvider = ({ children }) => {

  const [trendingsMovies, setTrendingsMovies] = useState([]);
  const [popularsMovies, setPopularsMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreMovies, setGenresMovies] = useState([]);
  const [related, setRealated] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [showQuery, setShowQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const getTrendingMovies = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/trending/movie/day?${API_KEY}`)
    const data = await request.json()
    const { results } = data;
    setTrendingsMovies(results);
    setLoading(false);
  };

  const getGenresMovies = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`);
    const data = await request.json();
    const { genres } = data;
    setGenres(genres);
    setLoading(false);
  };

  const getSingleMovie = useCallback(async (id) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?${API_KEY}`);
    const data = await request.json();
    setSingleMovie(data);
    setLoading(false);
  }, []);

  const getCategory = useCallback(async (id) => {
    const request = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&${API_KEY}`);
    const data = await request.json();
    const { results } = data;
    setGenresMovies(results);
    setLoading(false);
  }, []);

  const getRelatedMovies = useCallback(async (id) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?${API_KEY}`);
    const data = await request.json();
    const { results } = data;
    setRealated(results);
    setLoading(false);
  }, []);

  const getMoviesBySearch = useCallback(async (query) => {
    const request = await fetch(`https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${query}`);
    const data = await request.json();
    const { results } = data;
    setMoviesSearch(results);
    setLoading(false);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const getPopularsMovies = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?${API_KEY}`)
    const data = await request.json()
    const { results } = data;
    setPopularsMovies(results);
    setLoading(false);
  };

  useEffect(() => {
    getTrendingMovies();
    getPopularsMovies();
    getGenresMovies();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        singleMovie,
        trendingsMovies,
        popularsMovies,
        getSingleMovie,
        genres,
        getCategory,
        genreMovies,
        getRelatedMovies,
        related,
        inputValue,
        onInputChange,
        handleSubmit,
        showQuery,
        setShowQuery,
        getMoviesBySearch,
        moviesSearch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { MoviesProvider };
