import React from 'react'
import { useSelector } from 'react-redux'


export const CardsPokemons = ({name, image}) => {

  return (
    <>
      <div>
        <h2>name: {name}</h2>
        <img src={image} />
      </div>
    </>
  )
}
