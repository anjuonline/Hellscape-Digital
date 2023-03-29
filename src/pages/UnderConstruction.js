import ReactPlayer from "react-player"
import { NavLink } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div class="main-column">

        <div class="logo">
          <NavLink to={"/"}><img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/></NavLink>
        </div>
        <div class="card-container-rainbow">
            <div class="featured-card">
                <p>
                    This page is currently under construction. Please check back later!
                </p>
            </div>
        </div>      
        <div> 
            <NavLink to={"/"}>
                <p>
                    Return to Home
                </p>
            </NavLink>    
        </div>

    </div>
  );
};
export default UnderConstruction;