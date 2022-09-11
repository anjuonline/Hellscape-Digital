import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import KawaiiSinglesStatic from 'components/archive/artist/kawaiiry/music/KawaiiSinglesStatic';
import KawaiiMusicSubindex from 'components/archive/artist/kawaiiry/KawaiiMusicSubindex';

const ArchiveMusicKawaiiSingles = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Hellscape Digital - Music Archive</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>

      <div class="card-container">
        <div class="sticky">
          <KawaiiMusicSubindex/>
          <KawaiiSinglesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicKawaiiSingles;
