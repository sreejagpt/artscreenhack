
import React from 'react';
import { connect } from 'react-redux';
import { head } from 'lodash';
import searchResults from '../data/searchResults.json';

const ArtWorkDetailed = (props) => {
  const { artworks, match } = props;
  const { id } = match.params;
  // const artwork = extractArtworkFromOutput(id, artworks);
  const artwork = getStub(id);
  return (
    <div className="artworkdetails">
      <div className="artwork-description">
        <h2>{artwork.shortTitle}</h2>
        <p>Description: {artwork.description}</p>
        <p>Artist: {artwork.artist}</p>
        <p>Art form: {artwork.artForm}</p>
        <p>Website: {artwork.personalWebsite}</p>
        <button className="option">Option Me</button>
      </div>
    </div>);
};

const extractArtworkFromOutput = (id, artworks) =>
  head(artworks.filter(aw => aw.id === id));

const getStub = id =>
  head(searchResults['blade runner'].filter(aw => aw.id === id));

const mapStateToProps = state => {
  const { search } = state;
  return {
    artworks: search.searchOutput,
  };
};

export default connect(mapStateToProps)(ArtWorkDetailed);
