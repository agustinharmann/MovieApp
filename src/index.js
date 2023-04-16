import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './Pages/App/App';
import { MoviesSearched } from './Pages/MoviesSearched';
import { MoviesProvider } from './useContext/userProvider';
import { SingleMovie } from './Pages/SingleMovie';
import { Trending } from './Pages/Trending';
import { Popular } from './Pages/Popular';
import { Genres } from './Pages/Genre';
import { Footer } from './components/Footer';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MoviesProvider>
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/trending' element={ <Trending /> } />
          <Route path='/popular' element={ <Popular /> } />
          <Route path='/info-single-movie' element={ <SingleMovie /> } />
          <Route path='/genre' element={ <Genres /> } />
          <Route path='/search' element={ <MoviesSearched /> } />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </MoviesProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
