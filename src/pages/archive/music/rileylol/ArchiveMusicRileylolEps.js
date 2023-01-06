import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import RileylolEpsStatic from 'components/archive/artist/rileylol/music/RileylolEpsStatic';
import RileylolMusicSubindex from 'components/archive/artist/rileylol/RileylolMusicSubindex';

const ArchiveMusicRileylolEps = () => {

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
          <RileylolMusicSubindex/>
          <RileylolEpsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicRileylolEps;
