import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LugosiEpsStatic from 'components/archive/artist/lugosi/music/LugosiEpsStatic';
import LugosiMusicSubindex from 'components/archive/artist/lugosi/LugosiMusicSubindex';

const ArchiveMusicLugosiEps = () => {

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
          <LugosiMusicSubindex/>
          <LugosiEpsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicLugosiEps;
