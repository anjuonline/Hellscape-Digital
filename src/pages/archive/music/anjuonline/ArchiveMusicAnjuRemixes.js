import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MusicAnjuData from 'data/music/AnjuData';
import AnjuAlbumsStatic from 'components/archive/artist/anjuonline/music/AnjuAlbumsStatic';
import AnjuRemixesStatic from 'components/archive/artist/anjuonline/music/AnjuRemixesStatic';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';

const ArchiveMusicAnjuRemixes = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Archive / Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>
      
      <div class="card-container">
        <div class="sticky">
          <div class="title-wrap-rainbow">
            <h2>ANJU Online! / Albums</h2>
          </div>
          <AnjuAlbumsStatic/>
        </div>
      </div>

      <div class="card-container">
        <div class="sticky">
          <AnjuMusicSubindex/>
          <AnjuRemixesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnjuRemixes;
