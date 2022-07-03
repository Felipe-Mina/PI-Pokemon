import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './styles/nav.css'
import '../images/pokemon-logo.png'

export const NavBar = () => {

  const Type = [ "Grass", "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric", "Ground", "Fairy" ];
  const Existent = ["Existing", "Created"];
  const Strong = ["Strong +", "Strong -"];
  const Alphabetic = [ "Ascending", "Descending" ]

    const navigate = useNavigate()


  return (
    <>
      <div className="navbar">
        <div className="nav-img">
          <Link to={"/home"}>
          <img src="https://th.bing.com/th/id/R.a4ff2ee093a2294ae0eff4e9ba027d34?rik=P5sQGDB9f8iT6Q&pid=ImgRaw&r=0" alt="" />
          </Link>
        </div>
        <div className="nav-btn-container">
        <select className="nav-button" name="type" defaultValue="">
          <option value="">Pokemon type</option>
          {Type.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select className="nav-button" name="exist" defaultValue="">
          <option value="">Existent</option>
          {Existent.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select className="nav-button" name="exist" defaultValue="">
          <option value="">Alphabetic</option>
          {Alphabetic.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select className="nav-button" name="strong" defaultValue="">
          <option value="">Strong</option>
          {Strong.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
          <Link className='nav-search' to="/search">
            <button className="nav-button">
              Search
            </button>
          </Link>
          <Link to="/form">
            <button className="nav-button">
              Create Pokemon
            </button>
          </Link>
          </div>
      </div>
    </>
  )
}
