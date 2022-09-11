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
          <h2>Archive - Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>

      <div class="card-container">
        <div class="sticky">
          <AnjuMusicSubindex/>
          <AnjuAlbumsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnjuDjSets;
