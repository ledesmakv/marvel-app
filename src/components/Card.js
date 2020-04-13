import React from 'react';

const Card = ({character}) => {
  const {name} = character;
  // esto no funciona es una mentira (?)
  // const portrait = thumbnail.path

  return (
    <div className="card">
      <div className="name">
        <h3>
          {name}
        </h3>
      </div>
    </div>
  );
}

export default Card;