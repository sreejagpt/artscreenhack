import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkShort = ({ artwork }) => {
  return (
    <div>
      <h2>{artwork.artist}</h2>
      <p>{artwork.description}</p>
      <Link href="/#" to={`/artwork/${artwork.id}`}>View Item</Link>
    </div>);
};

export default ArtworkShort;
