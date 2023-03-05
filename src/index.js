import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './utils/userProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Trending } from './components/Trending';
import { Movie } from './components/Movie';
import { Genres } from './components/Genre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={ <App /> } />
          <Route path='/trending' element={ <Trending /> } />
          <Route path='/info-movie' element={ <Movie /> } />
          <Route path={'/genre'} element={ <Genres /> } />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
