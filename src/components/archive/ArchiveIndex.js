import { NavLink } from 'react-router-dom';
import { Cross } from 'utils/Symbols';

const navLinkStyle = {marginLeft: '8px', marginRight: '8px'}

const ArchiveIndex = () => {
  return (
    <>
      <div class="card-container-rainbow">
        <div class="featured-card">
          <div class="flexColumn">
            <div class="containedText">
              <div class="activeLink">
                <p>
                  <NavLink to={"/archive/music"} style={navLinkStyle}>Music</NavLink>
                  <Cross />
                  <NavLink to={"/archive/artwork"} style={navLinkStyle}>Artwork</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArchiveIndex;