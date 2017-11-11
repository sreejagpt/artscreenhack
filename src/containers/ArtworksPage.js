import React from 'react';
import { connect } from 'react-redux';
import ArtworkShort from '../components/ArtworkShort';

const ArtworksPage = ({ artworks }) => {
  return (
    <div>
      {artworks.map(artwork => <ArtworkShort artwork={artwork} key={artwork.Artist} />)}
    </div>
  );
};

const mapStateToProps = state => {
  const { search } = state;
  return {
    artworks: search.searchOutput,
  };
};

export default connect(mapStateToProps, null)(ArtworksPage);
