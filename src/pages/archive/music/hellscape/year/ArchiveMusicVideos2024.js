import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveMusicVideos2024Static from 'components/archive/artist/hellscape/music/year/ArchiveMusicVideos2024Static';
import MusicVideosSubindex from 'components/archive/artist/hellscape/music/MusicVideosSubindex';

const ArchiveMusicVideos2024 = () => {

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
          <ArchiveMusicVideos2024Static/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicVideos2024;
