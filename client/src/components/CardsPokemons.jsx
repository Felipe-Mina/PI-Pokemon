import React from 'react'
import { useSelector } from 'react-redux'
import './styles/cardsPokemons.css'

export const CardsPokemons = ({name, img, types}) => {
  return (
    <>
      <div className='cards__pokemons'>
        <div className='card-contain'>
        <p className='card-p'>{name}</p>
        <img src={img} />
        <div className='types-cards'>
          {types.map(e => {
            return <div className='type-label' style={{color:"white"}}>{e}</div>
          })}
        </div>
        </div>
       
      </div>
    </>
  )
}
