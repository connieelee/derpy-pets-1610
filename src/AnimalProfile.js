import React from 'react';

export default function AnimalProfile(props) {
  const { filter, id } = props.params
  const findAnimalById = animal => animal.id === +id;
  const animal = props[filter].find(findAnimalById);
  const { imageUrl, name, gender, description, species } = animal;

  return (
    <div className="row">
      <h4>{name}</h4>
      <br />
        <div className="col s4 offset-s4">
          <img className="animal-img" src={imageUrl} alt={name} />
          <p className="animal-label">
            {name} is a {gender === 'M' ? 'male' : 'female'} {description} {species}. <br />
            I am a very nice {species}. <br />
            Take me home today!
          </p>
        </div>
    </div>
  );
}
