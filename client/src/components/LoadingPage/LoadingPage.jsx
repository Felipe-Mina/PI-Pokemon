import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import loadingLogo from '../../images/R.gif'
import './loadingPage.css'

export const LoadingPage = () => {
    return (
        <>
        <div className="contain-loading">
            <main>
                <img src={loadingLogo} alt="" />
            </main>
        </div>
        </>
  )
}
