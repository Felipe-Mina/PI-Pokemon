import axios from "axios";
import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./form.css";

function validateCreatePokemon(pokemons) {
  let error = {};
  if (!pokemons.name || isNaN(pokemons.name) === false) {
    error.name = "Name required";
  }
  else if (!pokemons.img) {
    error.img = "Image required";
  }
  else if (!pokemons.hp) {
    error.hp = "Health points required";
  }
  else if (!pokemons.atck) {
    error.atck = "Atack required";
  }
  else if (!pokemons.def) {
    error.def = "Defense required";
  }
  else if (!pokemons.speed) {
    error.speed = "Speed required";
  }
  else if (!pokemons.height) {
    error.height = "Height required";
  }
  else if (!pokemons.weight) {
    error.weight = "Weight required";
  }
  else if (!pokemons.types) {
    error.types = "Types required";
  }
  return error;
}

export const CreateForm = () => {
  const [error, setError] = useState({});
  //    Declaro los estados del formulario...
  const [pokemons, setPokemons] = useState({
    name: "",
    img: "",
    hp: "",
    atck: "",
    def: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  //    Funcion que actualiza el estado de los input...
  function onChangeInput(e) {
    setPokemons({
      ...pokemons,
      [e.target.name]: e.target.value
    });
  }
  //    Funcion que crea el pokemon con la informacion provista y devuelve el estado a su valor inicial...
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/pokemon", pokemons);
    alert(`Atrapaste un ${pokemons.name}!!!`);
    setPokemons({
      name: "",
      img: "",
      hp: "",
      atck: "",
      def: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  }
  //    Funcion que asignan los tipos en el select...
  function onChangeType(e) {
    setPokemons((prevState) => {
      return {
        ...prevState,
        [e.target.types]: prevState.types.push(e.target.value),
      };
    });
    setError(
      validateCreatePokemon({
        ...pokemons,
        [e.target.name]: e.target.value,
      })
    );
  }
  //    Funcion que borra los tipos con el div "x-button"
  function handleDelete(e) {
    setPokemons({
      ...pokemons,
      types: pokemons.types.filter((t) => t !== e),
    });
  }

  return (
    <>
      <NavBar />
      <div className="form-container">
        <div></div>
        <form action="#" method="post" className="pokemon-form">
          <div>
            <input
              value={pokemons.name}
              className="form-imput"
              autoComplete="falase"
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => onChangeInput(e)}
            />
            {console.log(error.name)}
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              autoComplete="falase"
              type="text"
              placeholder="Image url"
              onChange={onChangeInput}
              name="img"
            />
            {error.img && <p>{error.img}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              type="number"
              placeholder="Hp"
              onChange={onChangeInput}
              name="hp"
              required
              />
              {error.hp && <p>{error.hp}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              type="number"
              placeholder="Atack"
              onChange={onChangeInput}
              name="atck"
              required
            />
            {error.atck && <p>{error.atck}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              type="number"
              placeholder="Defense"
              name="def"
              onChange={onChangeInput}
              required
            />
              {error.def && <p>{error.def}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              type="number"
              placeholder="Speed"
              name="speed"
              onChange={onChangeInput}
              required
            />
            {error.speed && <p>{error.speed}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              type="number"
              placeholder="Height"
              name="height"
              onChange={onChangeInput}
              required
            />
            {error.height && <p>{error.height}</p>}
          </div>
          <div>
            <input
              className="form-imput"
              type="number"
              placeholder="Weight"
              name="weight"
              onChange={onChangeInput}
              required
            />
            {error.weight && <p>{error.weight}</p>}
          </div>
          <div>
            <select
              className="form-select"
              name="type"
              defaultValue="form-types"
              onChange={onChangeType}
            >
              <option value="form-types" selected disabled hidden>
                Pokemon type
              </option>
              <option value="grass">Grass</option>
              <option value="poison">Poison</option>
              <option value="fire">Fire</option>
              <option value="flying">Flying</option>
              <option value="water">Water</option>
              <option value="bug">Bug</option>
              <option value="normal">Normal</option>
              <option value="electric">Electric</option>
              <option value="ground">Ground</option>
              <option value="fairy">Fairy</option>
            </select>
            <div className="types-form">
              {pokemons.types?.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="type-contain"
                    style={{ color: "white" }}
                  >
                    {e}
                    <div
                      className="x-button"
                      onClick={() => {
                        handleDelete(e);
                      }}
                    >
                      X
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
              <button
                className="nav-button"
                type="submit"
                value="create..."
                id="form_button"
                onClick={handleSubmit}
                disabled={
                  !pokemons.name ||
                  error.img ||
                  error.hp ||
                  error.atck ||
                  error.def ||
                  error.speed ||
                  error.height ||
                  error.weight ||
                  !pokemons.types.length
                    ? true
                    : false
                }
              >
                Create...
              </button>
        </form>
      </div>
    </>
  );
};
