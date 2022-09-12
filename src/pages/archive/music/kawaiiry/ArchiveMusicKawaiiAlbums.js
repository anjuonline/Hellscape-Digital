import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import KawaiiAlbumsStatic from 'components/archive/artist/kawaiiry/music/KawaiiAlbumsStatic';
import KawaiiMusicSubindex from 'components/archive/artist/kawaiiry/KawaiiMusicSubindex';

const ArchiveMusicKawaiiAlbums = () => {

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
          <KawaiiMusicSubindex/>
          <KawaiiAlbumsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicKawaiiAlbums;
