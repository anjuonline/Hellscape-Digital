import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LugosiSinglesStatic from 'components/archive/artist/lugosi/music/LugosiSinglesStatic';
import LugosiMusicSubindex from 'components/archive/artist/lugosi/LugosiMusicSubindex';

const ArchiveMusicLugosiSingles = () => {

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
          <LugosiSinglesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicLugosiSingles;
