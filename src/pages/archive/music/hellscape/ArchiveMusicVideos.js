import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveMusicVideosStatic from 'components/archive/artist/hellscape/music/ArchiveMusicVideosStatic';
import MusicVideosSubindex from 'components/archive/artist/hellscape/music/MusicVideosSubindex';

const ArchiveMusicVideos = () => {

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
          <MusicVideosSubindex/>
          <ArchiveMusicVideosStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicVideos;
