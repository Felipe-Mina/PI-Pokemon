import React from "react";
import { useSelector } from "react-redux";
import "./cardsPokemons.css";
import { Link } from "react-router-dom";

export const CardsPokemons = ({ name, img, types, key }) => {
  if ((name, img, types)) {
    return (
      <>
          <div className="cards__pokemons">
        <Link style={{ textDecoration: "none" }} to={"/pokemon"}>
            <div className="card-contain">
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
