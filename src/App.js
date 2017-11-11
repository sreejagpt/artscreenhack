import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './containers/SearchPage';
import ArtworksPage from './containers/ArtworksPage';
import './App.css';

export default () => (
  <div>
    <main>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/artworks" component={ArtworksPage} />
    </main>
  </div>
);
