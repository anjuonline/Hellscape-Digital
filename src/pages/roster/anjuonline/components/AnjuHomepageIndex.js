import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';

const AnjuHomepageIndex = () => {
  return (
    <>
      <div class="card-container-rainbow">
        <div class="featured-card">
          <div class="flexColumn">
            <div class="containedText">
              <div class="indexText">
                <a href="#artwork">Artwork 🎨</a>
                &nbsp;&nbsp;<a href="#music">Music 🎸</a>
                &nbsp;&nbsp;<a href="#clothing">Clothing 🧵</a>
                {/* <NavLink to={"/archive/artwork"}>&nbsp;&nbsp;Artwork&nbsp;&nbsp;</NavLink> */}
              </div>
            </div>
          </div>
          <div class="flexColumn">
            <div class="containedText">
              <div class="indexText">
                <a href="#socials">Socials 💌</a>
                &nbsp;&nbsp;<a href="#fanart">Fan Art 💖</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnjuHomepageIndex;