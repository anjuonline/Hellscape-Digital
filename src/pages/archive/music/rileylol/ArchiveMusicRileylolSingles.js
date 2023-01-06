import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import RileylolSinglesStatic from 'components/archive/artist/rileylol/music/RileylolSinglesStatic';
import RileylolMusicSubindex from 'components/archive/artist/rileylol/RileylolMusicSubindex';

const ArchiveMusicRileylolSingles = () => {

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
          <RileylolSinglesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicRileylolSingles;
