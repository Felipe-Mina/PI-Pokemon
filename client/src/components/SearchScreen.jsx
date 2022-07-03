import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "./NavBar";
import { search_pokemons } from "../actions/index";
import "./styles/search.css";
import { CardDetail } from "./CardDetail";

export const SearchScreen = () => {
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
          <h1>Search pokemon</h1>
          <hr />
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              placeholder="Pikachu is searching a friend..."
              className="form-imput"
              value={Pokemon}
              onChange={(e) => handleInputChange(e)}
              required='true'
            />

            <input type="submit" value="🔎" className="btn-search" />
          </form>
          <img
            src="https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2016/08/Pikachu-Gif-Animation.gif"
            alt=""
          />
        </div>
        <div className="resultados">
          <h4>Resultados</h4>
          {
            <CardDetail
              key={e.id}
              name={e.name}
              image={e.image}
              type={e.types}
            />
          }
        </div>
      </div>
    </div>
  );
};
