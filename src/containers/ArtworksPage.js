import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArtworkShort from '../components/ArtworkShort';
import artwork from '../data/shapes/artwork';
import { viewPage } from '../reducers/artworks';

const ArtworksPage = ({ artworks, viewDetailedPage }) => {
  return (
    <div className="art-row">
      {artworks.map(aw => <ArtworkShort artwork={aw} key={aw.id} viewDetailedPage={viewDetailedPage} />)}
    </div>
  );
};

const mapStateToProps = state => {
  const { search } = state;
  return {
    artworks: search.searchOutput,
  };
};

const mapDispatchToProps = dispatch => ({
  viewDetailedPage: dispatch(viewPage),
});

ArtworksPage.propTypes = {
  artworks: PropTypes.arrayOf(artwork).isRequired,
  viewDetailedPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksPage);
