import React from "react";

export const CardDetail = ({ name, image, type }) => {
  if ((name, image, type)) {
    return (
      <>
        <div className="cards__pokemons">
          <div className="card-contain">
          <p className='card-p'>{name}</p>
            <img src={image} />
            <div className="types-cards">
            {type.map(e => {
            return <div className='type-label' style={{color:"white"}}>{e}</div>
          })}            
          </div>
          </div>
        </div>
      </>
    );
  } else return "";
};
