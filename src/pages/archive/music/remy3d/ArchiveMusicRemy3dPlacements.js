import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import Remy3dPlacementsStatic from 'components/archive/artist/remy3d/music/Remy3dPlacementsStatic';
import Remy3dMusicSubindex from 'components/archive/artist/remy3d/Remy3dMusicSubindex';

const ArchiveMusicRemy3dPlacements = () => {

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
          <Remy3dMusicSubindex/>
          <Remy3dPlacementsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicRemy3dPlacements;
