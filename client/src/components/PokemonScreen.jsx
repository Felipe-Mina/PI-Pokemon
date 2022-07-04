import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pokemon_detail } from "../actions/index"
import { NavBar } from "./NavBar/NavBar"


export const PokemonScreen = () => {

    const dispatch = useDispatch()
  
  /*   useEffect(() => {
        dispatch(pokemon_detail());
    }, [dispatch]); */

    return (
    <div>
        <NavBar />
    </div>
  )
}
