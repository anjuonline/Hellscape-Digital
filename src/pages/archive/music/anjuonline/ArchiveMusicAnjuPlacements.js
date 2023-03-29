import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import AnjuPlacementsStatic from 'components/archive/artist/anjuonline/music/AnjuPlacementsStatic';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';

const ArchiveMusicAnjuPlacements = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Hellscape Digital - Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>
      
      <div class="card-container">
        <div class="sticky">
          <AnjuMusicSubindex/>
          <AnjuPlacementsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnjuPlacements;
