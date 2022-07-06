import { useEffect, useState } from "react";
import "./home.css";
import { NavBar } from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { get_pokemons, clean } from "../../actions/index";
import { CardsPokemons } from "../CardsPokemons/CardsPokemons";
import { LoadingPage } from "../LoadingPage/LoadingPage";

export const Home = () => {
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.allPok);
  const loading = useSelector((state) => state.loading);
  let ok;

  const [paginado, setPaginado] = useState(0);

  useEffect(() => {
    const ok = true;
    dispatch(get_pokemons());
    dispatch(clean());
  }, [ok]);

  const pokemonsNum = 12;
  const pagesVisited = paginado * pokemonsNum;
  const filteredPokemons = estado.slice(
    pagesVisited,
    pagesVisited + pokemonsNum
  );

  function onChangeNext() {
    if (filteredPokemons.length === pokemonsNum) {
      let change = paginado + 1;
      setPaginado(change);
    }
  }

  function onChangePrev() {
    if (paginado !== 0) {
      let change = paginado - 1;
      setPaginado(change);
    }
  }

  return (
    <div className="contain-home">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="home-cards">
          {loading && <LoadingPage />}
          {filteredPokemons.map((e, i) => (
            <CardsPokemons
              key={i}
              name={e.name}
              img={e.img}
              types={e.types}
              id={e.id}
            />
          ))}
        </div>
        <div>
          <button className="nav-button" onClick={onChangePrev}>
            prev
          </button>
          <button className="nav-button" onClick={onChangeNext}>
            next
          </button>
        </div>
      </main>
    </div>
  );
};
