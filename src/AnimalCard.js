import React from 'react';
import { Link } from 'react-router';

export default function AnimalCard({ animal }) {
  return (
    <div className="col s3">
      <Link to={`/${animal.species}s/${animal.id}`}>
        <img className="animal-img" src={animal.imageUrl} alt={animal.name} />
        <p className="animal-label">{animal.name} ({animal.gender}): {animal.description}</p>
      </Link>
    </div>
  );
}
