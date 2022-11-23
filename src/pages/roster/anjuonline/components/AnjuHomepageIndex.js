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
                <a href="#music">Music 🎸</a>
                <a href="#clothing">Clothing 🧵</a>
                {/* <NavLink to={"/archive/artwork"}>&nbsp;&nbsp;Artwork&nbsp;&nbsp;</NavLink> */}
              </div>
            </div>
          </div>
          <div class="flexColumn">
            <div class="containedText">
              <div class="indexText">
                <a href="#socials">Socials 💌</a>
                <a href="#fanart">Fan Art 💖</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnjuHomepageIndex;