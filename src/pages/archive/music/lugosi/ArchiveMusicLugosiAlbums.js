import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LugosiAlbumsStatic from 'components/archive/artist/lugosi/music/LugosiAlbumsStatic';
import LugosiMusicSubindex from 'components/archive/artist/lugosi/LugosiMusicSubindex';

const ArchiveMusicLugosiAlbums = () => {

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
          <LugosiAlbumsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicLugosiAlbums;
