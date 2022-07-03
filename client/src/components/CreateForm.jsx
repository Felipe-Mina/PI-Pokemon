import React from "react";
import { NavBar } from "./NavBar";
import "./styles/form.css";

export const CreateForm = () => {
  const Type = [
    "Grass",
    "Poison",
    "Fire",
    "Flying",
    "Water",
    "Bug",
    "Normal",
    "Electric",
    "Ground",
    "Fairy",
  ];

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
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              autoComplete="falase"
              type="text"
              placeholder="Image url"
              name="image"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Hp"
              name="hp"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Atack"
              name="atack"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Defense"
              name="defense"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Speed"
              name="speed"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Height"
              name="height"
              required
            />
          </div>
          <div>
            <input
              className="form-imput"
              type="text"
              placeholder="Weight"
              name="weight"
              required
            />
          </div>
          <div>
            <select className="form-select" name="type" defaultValue="">
              <option value="">Pokemon type</option>
              {Type.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
        <div className="pokemon-created">
          Your Pokemon!!
        </div>
      </div>
    </>
  );
};
