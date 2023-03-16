import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './useContext/userProvider';
import { Trending } from './components/Trending';
import { Movie } from './components/Movie';
import { Genres } from './components/Genre';
import { MoviesSearched } from './components/MoviesSearched';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/trending' element={ <Trending /> } />
          <Route path='/info-movie' element={ <Movie /> } />
          <Route path='/genre' element={ <Genres /> } />
          <Route path='/movies-searched' element={ <MoviesSearched /> } />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
