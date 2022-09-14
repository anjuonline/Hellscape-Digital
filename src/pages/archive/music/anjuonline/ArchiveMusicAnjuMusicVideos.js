import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MusicAnjuData from 'data/music/AnjuData';
import AnjuMusicVideosStatic from 'components/archive/artist/anjuonline/music/AnjuMusicVideosStatic';
import AnjuDjSetsStatic from 'components/archive/artist/anjuonline/music/AnjuDjSetsStatic';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';

const ArchiveMusicAnjuMusicVideos = () => {

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
          <AnjuMusicSubindex/>
          <AnjuMusicVideosStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnjuMusicVideos;
