import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './Pages/App/App';
import { MoviesSearched } from './Pages/MoviesSearched';
import { MoviesProvider } from './useContext/userProvider';
import { SingleMovie } from './Pages/SingleMovie';
import { Trending } from './Pages/Trending';
import { Popular } from './Pages/Popular';
import { Genres } from './Pages/Genre';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
