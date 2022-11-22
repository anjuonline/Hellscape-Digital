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
                &nbsp;&nbsp;<a href="#artwork">Artwork</a>&nbsp;&nbsp;
                <CrossSymbol />
                <NavLink to={"/anjuonline/music/all"}>&nbsp;&nbsp;Music&nbsp;&nbsp;</NavLink>
                <CrossSymbol />
                &nbsp;&nbsp;<a href="#clothing">Clothing</a>&nbsp;&nbsp;
                {/* <NavLink to={"/archive/artwork"}>&nbsp;&nbsp;Artwork&nbsp;&nbsp;</NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnjuHomepageIndex;