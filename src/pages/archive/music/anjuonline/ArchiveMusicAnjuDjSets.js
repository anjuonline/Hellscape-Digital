import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MusicAnjuData from 'data/music/AnjuData';
import AnjuAlbumsStatic from 'components/archive/artist/anjuonline/music/AnjuAlbumsStatic';
import AnjuDjSetsStatic from 'components/archive/artist/anjuonline/music/AnjuDjSetsStatic';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';

const ArchiveMusicAnjuDjSets = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Hellscape Digital - Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>
      
      {/* <div class="card-container">
        <div class="sticky">
          <div class="title-wrap-rainbow">
            <h2>ANJU Online! / Albums</h2>
          </div>
          <AnjuAlbumsStatic/>
        </div>
      </div> */}

      <div class="card-container">
        <div class="sticky">
          <AnjuMusicSubindex/>
          <AnjuDjSetsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnjuDjSets;
