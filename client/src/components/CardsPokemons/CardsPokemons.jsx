import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cardsPokemons.css";
import { Link } from "react-router-dom";
import { pokemon_detail } from "../../actions";


export const CardsPokemons = ({ name, img, types, id }) => {
  const dispatch = useDispatch();
  if ((name, img, types)) {

    function onChangeId() {
      dispatch(pokemon_detail(id))
    }
    return (
      <>
          <div className="cards__pokemons">
        <Link style={{ textDecoration: "none" }} to={"/pokemon"}>
            <div className="card-contain" onClick={onChangeId}>
              <p className="text-p">{name}</p>
              <img className="image-size" src={img} />
              <div className="types-cards">
                {types?.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="type-label"
                      style={{ color: "white" }}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
        </Link>
          </div>
      </>
    );
  } else return "";
};
