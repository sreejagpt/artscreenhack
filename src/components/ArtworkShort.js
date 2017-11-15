import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../url-config';

const ArtworkShort = ({ artwork }) => {
  const imageUrl = `${BASE_URL}/${artwork.image}`;
  return (
    <div className="artwork-short-description">
      <Link href="/#" to={`/artworks/${artwork.id}`}>
        <img src={imageUrl} width='20%' alt={artwork.shortTitle}></img>
        <h2>{artwork.shortTitle}</h2>
        <h3>{artwork.artist}</h3>
        <p>{artwork.description}</p>
      </Link>
    </div>
  );
};

export default ArtworkShort;
