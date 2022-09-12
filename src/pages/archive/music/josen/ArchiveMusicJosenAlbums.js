import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import JosenAlbumsStatic from 'components/archive/artist/josen/music/JosenAlbumsStatic';
import JosenMusicSubindex from 'components/archive/artist/josen/JosenMusicSubindex';

const ArchiveMusicJosenAlbums = () => {

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
          <JosenMusicSubindex/>
          <JosenAlbumsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicJosenAlbums;
