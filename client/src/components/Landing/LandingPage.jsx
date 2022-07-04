import "./landingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div className="landingpage">
        <div className="landing-btn-container"> 
            <div className="btn">
            <Link className="lnk" to="/home">
              Continue
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};
