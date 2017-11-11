import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArtworkShort from '../components/ArtworkShort';
import artwork from '../data/shapes/artwork';

const ArtworksPage = ({ artworks }) => {
  return (
    <div>
      {artworks.map(aw => <ArtworkShort artwork={aw} key={aw.Artist} />)}
    </div>
  );
};

const mapStateToProps = state => {
  const { search } = state;
  return {
    artworks: search.searchOutput,
  };
};

ArtworksPage.propTypes = {
  artworks: PropTypes.arrayOf(artwork).isRequired,
};

export default connect(mapStateToProps, null)(ArtworksPage);
