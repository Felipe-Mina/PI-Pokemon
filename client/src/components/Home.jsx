import { useEffect } from "react";
import "./styles/home.css";
import { NavBar } from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { get_pokemons } from "../actions/index";
import { CardsPokemons } from "./CardsPokemons";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_pokemons());
  }, [dispatch]);

  const estado = useSelector((state) => state.allPok);

  return (
    <div className="contain-home">
      <header>
        <NavBar />
      </header>

      <main>
          <div className="home-cards">
            {estado.map((e) => (
              <Link to='/pokemon'>
              <CardsPokemons key={e.id} name={e.name} img={e.img} types={e.types} />
              </Link>
            ))}
          </div>
      </main>
    </div>
  );
};
