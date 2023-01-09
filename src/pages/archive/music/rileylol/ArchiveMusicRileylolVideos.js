import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import RileylolVideosStatic from 'components/archive/artist/rileylol/music/RileylolVideosStatic';
import RileylolMusicSubindex from 'components/archive/artist/rileylol/RileylolMusicSubindex';

const ArchiveMusicRileylolVideos = () => {

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
          <RileylolMusicSubindex/>
          <RileylolVideosStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicRileylolVideos;
