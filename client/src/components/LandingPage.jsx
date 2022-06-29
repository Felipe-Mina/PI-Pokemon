import './styles/landingPage.css'
import {Link} from 'react-router-dom'

export const LandingPage = () => {
    return (
      <>
        <div className="landingpage">
          <Link className='btn' to='/home'>
            Continue
          </Link>
        </div>
      </>
    )
  }
  
