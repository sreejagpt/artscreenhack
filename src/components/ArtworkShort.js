import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../url-config';

const ArtworkShort = ({ artwork }) => {
  const imageUrl = `${BASE_URL}/${artwork.image}`;
  return (
    <Link href="/#" to={`/artworks/${artwork.id}`}>
      <div className="artwork-short-description">
        <img src={imageUrl} width='20%' alt={artwork.shortTitle}></img>
        <h2>{artwork.shortTitle}</h2>
        <h3>{artwork.artist}</h3>
        <p>{artwork.description}</p>
      </div>
    </Link>
  );
};

export default ArtworkShort;
