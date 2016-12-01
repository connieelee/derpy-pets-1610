import React from 'react';
import AnimalCard from './AnimalCard';

export default function AnimalsList({ view, animals }) {
  return (
    <div className="row">
      <h4>{view}</h4>
      <div>
        { animals.map(animal => <AnimalCard key={animal.id} animal={animal} />) }
      </div>
    </div>
  );
}
