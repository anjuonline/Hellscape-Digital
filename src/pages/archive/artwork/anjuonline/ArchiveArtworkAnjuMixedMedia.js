import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import AnjuMixedMediaStatic from 'components/archive/artist/anjuonline/art/AnjuMixedMediaStatic';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import AnjuArtworkSubindex from 'components/archive/artist/anjuonline/art/AnjuArtworkSubindex';

const ArchiveArtworkAnjuMixedMedia = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Hellscape Digital - Artwork</h2>
        </div>
        <ArchiveArtworkSubindex/>
      </div>

      <div class="card-container">
        <div class="sticky">
          <AnjuArtworkSubindex/>
          <AnjuMixedMediaStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveArtworkAnjuMixedMedia;
