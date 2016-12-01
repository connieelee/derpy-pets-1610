import React from 'react';

export default function AnimalCard({ animal, selectAnimal }) {
  return (
    <div className="col s3" onClick={() => { selectAnimal(animal) }}>
      <img className="animal-img" src={animal.imageUrl} alt={animal.name} />
      <p className="animal-label">{animal.name} ({animal.gender}): {animal.description}</p>
    </div>
  );
}
