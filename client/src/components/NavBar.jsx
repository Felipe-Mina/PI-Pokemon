import React from "react"
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './styles/nav.css'

export const NavBar = () => {

    const navigate = useNavigate()


  return (
    <>
      <div className="navbar">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link btn" + (isActive ? "active" : "")
            }
            to="/search"
          >
            Search
          </NavLink>
      </div>
    </>
  )
}
