import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemon_detail } from "../../actions/index";
import { NavBar } from "../NavBar/NavBar";
import "./pokemonScreen.css";
import {LoadingPage} from '../LoadingPage/LoadingPage'

export const PokemonScreen = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.searchPok);

  if (detail.length === 0) {
    return (
      <>
        <NavBar />
      <div>
        <LoadingPage>
        </LoadingPage>
      </div>
      </>
    )
  }
  return (
    <>
      <NavBar />
      <div className="pokemon-contain">
        <div className="detail-screen">
          <div >
            <h1>{detail.name}</h1>
          </div>
          <div>
            <img src={detail.img} alt="" />
          </div>
        </div>
        <div className="stats-contain">
          <h4>Health points: {detail.hp}</h4>
          <h4>Atack: {detail.atck}</h4>
          <h4>Defense: {detail.def}</h4>
          <h4>Speed: {detail.speed}</h4>
          <h4>Height: {detail.height}</h4>
          <h4>Weight: {detail.weight}</h4>
        </div>
      </div>
    </>
  );
};
