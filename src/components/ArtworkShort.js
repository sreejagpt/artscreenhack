import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkShort = ({ artwork }) => {
  return (
    <div>
      <Link href="/#" to={`/artwork/${artwork.id}`}><img src={artwork.image} width='20%'></img></Link>
      <h2>{artwork.artist}</h2>
      <p>{artwork.description}</p>
    </div>);
};

export default ArtworkShort;
