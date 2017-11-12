import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkShort = ({ artwork }) => {
  return (
    <Link href="/#" to={`/artworks/${artwork.id}`}>
      <div className="artwork-short-description">
        <img src={artwork.image} width='20%'></img>
        <h2>{artwork.shortTitle}</h2>
        <h3>{artwork.artist}</h3>
        <p>{artwork.description}</p>
      </div>
    </Link>
  );
};

export default ArtworkShort;
