import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import AnjuIllustrationStatic from 'components/archive/artist/anjuonline/art/AnjuIllustrationStatic';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import AnjuArtworkSubindex from 'components/archive/artist/anjuonline/art/AnjuArtworkSubindex';

const ArchiveArtworkAnjuIllustration = () => {

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
          <AnjuIllustrationStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveArtworkAnjuIllustration;
