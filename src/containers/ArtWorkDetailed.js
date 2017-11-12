
import React from 'react';
import { connect } from 'react-redux';
import { head } from 'lodash';

const ArtWorkDetailed = (props) => {
  const { artworks, match } = props;
  const { id } = match.params;
  const artwork = extractArtworkFromOutput(id, artworks);
  return (
    <div className="artworkdetails">
      <div className="artwork-description">
        <h2>{artwork.shortTitle}</h2>
        <p><b>Description:</b> {artwork.description}</p>
        <p><b>Artist:</b> {artwork.artist}</p>
        <p><b>Art form:</b> {artwork.artForm}</p>
        <p><b>Website:</b> {artwork.personalWebsite}</p>
        <button className="option">Option Me</button>
      </div>
    </div>);
};

const extractArtworkFromOutput = (id, artworks) =>
  head(artworks.filter(aw => aw.id === id));

const mapStateToProps = state => {
  const { search } = state;
  return {
    artworks: search.searchOutput,
  };
};

export default connect(mapStateToProps)(ArtWorkDetailed);
