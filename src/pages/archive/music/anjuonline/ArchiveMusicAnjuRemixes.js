import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import AnjuRemixesStatic from 'components/archive/artist/anjuonline/music/AnjuRemixesStatic';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';

const ArchiveMusicAnjuRemixes = () => {

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
          <AnjuRemixesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnjuRemixes;
