import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import AnjuAllArtworkStatic from 'components/archive/artist/anjuonline/art/AnjuAllArtworkStatic';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import AnjuArtworkSubindex from 'components/archive/artist/anjuonline/art/AnjuArtworkSubindex';

const ArchiveArtworkAnju = () => {

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
          <AnjuAllArtworkStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveArtworkAnju;
