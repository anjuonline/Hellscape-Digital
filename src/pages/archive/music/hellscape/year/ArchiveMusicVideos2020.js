import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveMusicVideos2020Static from 'components/archive/artist/hellscape/music/year/ArchiveMusicVideos2020Static';
import MusicVideosSubindex from 'components/archive/artist/hellscape/music/MusicVideosSubindex';

const ArchiveMusicVideos2020 = () => {

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
          <ArchiveMusicVideos2020Static/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicVideos2020;
