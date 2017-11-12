import React from 'react';

export default ({ artwork }) => {
  return (
    <div>
      <h2>{artwork.artist}</h2>
      <p>{artwork.description}</p>
    </div>);
};


