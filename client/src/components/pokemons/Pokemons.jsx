import React from 'react'
import { useSelector } from 'react-redux'
import { CardsPokemons } from './CardsPokemons'


export const Pokemons = () => {

const estado = useSelector(state => state.allPok)

console.log(estado)

  return (
    <>
      <div>
        {estado.map(e => <CardsPokemons 
            key = {e.id}
            name = {e.name}
            image = {e.image}
        />)}
      </div>
    </>
  )
}
