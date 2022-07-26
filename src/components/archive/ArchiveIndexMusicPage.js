import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';

const ArchiveIndexMusicPage = () => {
  return (
    <>
      <div class="card-container-rainbow">
        <div class="featured-card">
          <div class="flexColumn">
            <div class="containedText">
              <div class="indexText">
                <NavLink to={"/music"}>&nbsp;&nbsp;Music&nbsp;&nbsp;</NavLink>
                <CrossSymbol />
                <NavLink to={"/archive/artwork"}>&nbsp;&nbsp;Artwork&nbsp;&nbsp;</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArchiveIndexMusicPage;