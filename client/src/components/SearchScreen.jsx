import React from 'react'
import { NavBar } from './NavBar'
import './styles/search.css'

export const SearchScreen = () => {
  return (
    <>
        <NavBar />
        <h1>Search pokemon</h1>
        <hr />
        <div className='search'>
            <div className='busqueda'>
                <h4>Buscar</h4>
                <hr />
                <form>
                    <imput
                    className='imput'
                    type='text'
                    placeholder='Buscar un poquemon'
                    name='searchText'
                    autocomplete='off'
                    >hola</imput>
                    <button type='submit'>
                        Buscar...
                    </button>
                </form>
            </div>
            <div className='resultados'>
                <h4>Resultados</h4>
                <hr />
            </div>
        </div>
    </>
  )
}