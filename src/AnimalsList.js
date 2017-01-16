import React from 'react';

import AnimalCard from './AnimalCard';

export default function AnimalsList({ params, cats, dogs }) {
  const filter = params.filter;
  const animals = filter === 'cats' ? cats : filter === 'dogs' ? dogs : [...cats, ...dogs];

  return (
    <div className="row">
      <h4>{filter}</h4>
      <div>
        {
          animals.map(animal =>
            <AnimalCard key={animal.id} animal={animal} />
          )
        }
      </div>
    </div>
  );
}
