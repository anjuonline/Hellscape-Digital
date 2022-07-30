import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';

const ArchiveIndex = () => {
  return (
    <>
      <div class="card-container-rainbow">
        <div class="featured-card">
          <div class="flexColumn">
            <div class="containedText">
              <div class="activeLink">
                <NavLink to={"/archive/music"}>Music</NavLink>
                <CrossSymbol />
                <NavLink to={"/archive/artwork"}>Artwork</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArchiveIndex;