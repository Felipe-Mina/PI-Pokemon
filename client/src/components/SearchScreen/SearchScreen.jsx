import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import { search_pokemons } from "../../actions/index";
import "./search.css";
/* import { CardDetail } from "./CardDetail";*/
import { CardsPokemons } from "../CardsPokemons/CardsPokemons";

export const SearchScreen = () => {
  const img = "https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2016/08/Pikachu-Gif-Animation.gif";

  const dispatch = useDispatch();

  const [Pokemon, setPokemon] = useState("");

  const e = useSelector((state) => state.searchPok);

  const handleInputChange = (e) => {
    e.preventDefault();
    setPokemon(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPokemon("");
    dispatch(search_pokemons(Pokemon));
  };

  return (
    <div className="search-container">
      <NavBar />
      <div className="search-screen">
        <div className="busqueda">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              placeholder="Pikachu is searching a friend..."
              className="form-imput"
              value={Pokemon}
              onChange={(e) => handleInputChange(e)}
              required={true}
            />

            <input type="submit" value="🔎" className="btn-search" />
          </form>
          <img src={img} alt="no image" />
        </div>
        <div className="resultados">
          <h4>Resultados</h4>
          {
            <CardsPokemons
              key={e.id}
              name={e.name}
              img={e.img}
              types={e.types}
            />
          }
        </div>
      </div>
    </div>
  );
};
