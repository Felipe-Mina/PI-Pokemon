import { useEffect } from "react"
import "./styles/home.css"
import { NavBar } from "./NavBar"
import { useDispatch } from "react-redux"
import { get_pokemons } from '../actions/index'
import { Pokemons } from "./pokemons/Pokemons"


export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_pokemons())
  },[dispatch])

  return (
    <>
      <NavBar />
      <div className="homepage">
        <Pokemons />
      </div>
    </>
  )
}

