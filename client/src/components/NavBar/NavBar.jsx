import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './nav.css'
import '../../images/pokemon-logo.png'
import { useDispatch } from "react-redux"
import { existent_pokemons, alfb_pokemons, strong_pokemons, get_pokemons, change_loading, types_pokemons } from "../../actions"

export const NavBar = () => {

  const dispatch = useDispatch();

    const navigate = useNavigate()

function onChangeExist(e){
  if (e.target.value === 'all') {
    dispatch(change_loading())
    dispatch(get_pokemons(e.target.value))
  }
  dispatch(change_loading())
  dispatch(existent_pokemons(e.target.value))
  console.log(e.target.value)
}

function onChangeStrong(e){
  dispatch(strong_pokemons(e.target.value))
}

function onChangeAlfb(e){
  dispatch(alfb_pokemons(e.target.value))
}

function onChangeTypes(e){
  dispatch(types_pokemons(e.target.value))
}

  return (
    <>
      <div className="navbar">
        <div className="nav-img">
          <Link to={"/home"}>
          <img src="https://th.bing.com/th/id/R.a4ff2ee093a2294ae0eff4e9ba027d34?rik=P5sQGDB9f8iT6Q&pid=ImgRaw&r=0" alt="" />
          </Link>
        </div>
        <div className="nav-btn-container">
        <select onChange={onChangeTypes} className="nav-button" name="type" defaultValue='type'>
          <option value="type" selected disabled hidden>Pokemon type</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="water">Water</option>
          <option value="bug">Bug</option>
          <option value="normal">Normal</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="fairy">Fairy</option>
        </select>

        <select onChange={onChangeExist} className="nav-button" name="exist" defaultValue='exist'>
            <option value="exist" selected disabled hidden>Existing</option>
            <option value="Existent">Existent</option>
            <option value="Created">Created</option>
            <option value="all">All</option>
            
        </select>

        <select onChange={onChangeAlfb} className="nav-button" name="exist" defaultValue='alpha'>
          <option value="alpha" selected disabled hidden>Aplhabetic</option>
          {/* <option style={{display: 'none'}}>Alphabetic</option> */}
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <select onChange={onChangeStrong} className="nav-button" name="strong" defaultValue='strong'>
          <option value="strong" selected disabled hidden>Strong</option>
          <option value="more">Strong +</option>
          <option value="low">Strong -</option>
        </select>
          <Link className='nav-search' to="/search">
            <button className="nav-button">
              Search
            </button>
          </Link>
          <Link to="/form">
            <button className="nav-button">
              Create Pokemon
            </button>
          </Link>
          </div>
      </div>
    </>
  )
}
