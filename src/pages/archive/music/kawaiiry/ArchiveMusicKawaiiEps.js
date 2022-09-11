import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import KawaiiEpsStatic from 'components/archive/artist/kawaiiry/music/KawaiiEpsStatic';
import KawaiiMusicSubindex from 'components/archive/artist/kawaiiry/KawaiiMusicSubindex';

const ArchiveMusicKawaiiEps = () => {

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
          <KawaiiMusicSubindex/>
          <KawaiiEpsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicKawaiiEps;
