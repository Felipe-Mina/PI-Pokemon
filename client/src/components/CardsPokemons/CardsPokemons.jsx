import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pokemon_detail } from "../../actions";
import "./cardsPokemons.css";

//    Este componente renderiza las cartas de resumen del pokemon...
export const CardsPokemons = ({ name, img, types, id }) => {
//    Recibo por parametros el nombre, la imagen, los tipos y el id del pokemon...
  const dispatch = useDispatch();
//    Utilizo el ID para acceder a la informacion detallada del pokemon...
  if ((name, img, types)) {
    function onChangeId() {
      dispatch(pokemon_detail(id));
    };

    return (
      <>
        <div className="cards__pokemons">
          <Link style={{ textDecoration: "none" }} to={"/pokemon"}>
            <div className="card-contain" onClick={onChangeId}>
              <p className="text-p">{name}</p>
              <img className="image-size" src={img} />
              <div className="types-cards">
                {types?.map((e, i) => {   /* Mapeo el arreglo de tipos de cada pokemon... */
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
