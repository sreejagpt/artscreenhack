import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkShort = ({ artwork }) => {
  return (
    <Link href="/#" to={`/artwork/${artwork.id}`}>
      <div className="artwork-short-description">
        <img src={artwork.image} width='20%'></img>
        <h2>{artwork.artist}</h2>
        <p>{artwork.description}</p>
      </div>
    </Link>
  );
};

export default ArtworkShort;
