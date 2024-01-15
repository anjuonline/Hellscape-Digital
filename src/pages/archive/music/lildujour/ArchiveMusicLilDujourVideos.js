import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LilDujourVideosStatic from 'components/archive/artist/lildujour/music/LilDujourVideosStatic';
import LilDujourMusicSubindex from 'components/archive/artist/lildujour/LilDujourMusicSubindex';

const ArchiveMusicLilDujourVideos = () => {

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
          <LilDujourMusicSubindex/>
          <LilDujourVideosStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicLilDujourVideos;
