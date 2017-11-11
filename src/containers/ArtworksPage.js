import React from 'react';
import { connect } from 'react-redux'
import ArtworkShort from '../components/ArtworkShort';

const ArtworksPage = ({ artworks }) => {
  return <div>
    {artworks.map(artwork => <ArtworkShort artwork={artwork} />)}
  </div>;
}

const mapStateToProps = state => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps, null)(ArtworksPage);
