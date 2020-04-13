import React from 'react';

const Card = ({character}) => {
  const { thumbnail, name, description } = character;
  const bgImg = `${thumbnail && thumbnail.path}/portrait_uncanny.jpg`;

  var cardBackground = {
    backgroundImage: "url(" + bgImg + ")"
  }

  return (
    <div className="card" style={cardBackground}>
      <div className="name">
        <h3>
          {name}
        </h3>
        {/* <p>
          {description}
        </p> */}
      </div>
    </div>
  );
}

export default Card;