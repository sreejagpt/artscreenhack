import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './containers/SearchPage';
import ArtworksPage from './containers/ArtworksPage';
import ArtWorkDetailed from './containers/ArtWorkDetailed';
import './App.css';

export default () => (
  <main>
    <Route exact path="/" component={SearchPage} />
    <Route exact path="/artworks" component={ArtworksPage} />
    <Route path="/artworks/:id" component={ArtWorkDetailed} />
  </main>
);
