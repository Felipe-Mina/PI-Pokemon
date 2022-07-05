import axios from "axios";
import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import "./form.css";

export const CreateForm = () => {

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
  })

  function handleDelete(e) {
    setPokemons({
      ...pokemons,
      types: pokemons.types.filter((t => t !== e))
    })
  }

  function onChangeType(e){
    setPokemons((prevState) => {
      return {...prevState, [e.target.types]: prevState.types.push(e.target.value)}
    })
  }

  function onChangeInput(e){
    setPokemons((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.toLowerCase() };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post('http://localhost:3001/pokemon', pokemons);
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

  return (
    <>
      <NavBar />
      <div className="form-container">
        <div></div>
        <form action="#" method="post" className="pokemon-form">
          <div>
            <input
              className="form-imput"
              autoComplete="falase"
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              autoComplete="falase"
              type="text"
              placeholder="Image url"
              onChange={onChangeInput}
              name="img"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Hp"
              onChange={onChangeInput}
              name="hp"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Atack"
              onChange={onChangeInput}
              name="atck"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Defense"
              name="def"
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Speed"
              name="speed"
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Height"
              name="height"
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Weight"
              name="weight"
              onChange={onChangeInput}
              required
            />
          </div>
          <div>
            <select className="form-select" name="type" defaultValue="form-types" onChange={onChangeType}>
              <option value="form-types" selected disabled hidden>Pokemon type</option> 
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
                      <div className="x-button" onClick={() => {handleDelete(e)}}>
                        X
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
          <div>
            <button className="nav-button" type="submit" value="create..." id="form_button" onClick={handleSubmit}>Create...</button>
          </div>
        </form>
        <div className="pokemon-created">
            <h2>{pokemons.name}</h2>
            <div>

            </div>
        </div>
      </div>
    </>
  );
};
