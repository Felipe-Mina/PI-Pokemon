import { useEffect } from "react";
import "./home.css";
import { NavBar } from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { get_pokemons } from "../../actions/index";
import { CardsPokemons } from "../CardsPokemons/CardsPokemons";
import { LoadingPage } from "../LoadingPage/LoadingPage";

export const Home = () => {
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.allPok);
  const loading = useSelector((state) => state.loading)
  let ok;

  useEffect(() => {
    const ok = true;
    dispatch(get_pokemons());
  }, [ok]);


  return (
    <div className="contain-home">
      <header>
        <NavBar />
      </header>
      <main>
          <div className="home-cards">
            {loading && <LoadingPage />}
            {estado.map((e) => (
              <CardsPokemons 
              key={e.id} 
              name={e.name} 
              img={e.img} 
              types={e.types} 
              />
            ))}
          </div>
      </main>
    </div>
  );
};