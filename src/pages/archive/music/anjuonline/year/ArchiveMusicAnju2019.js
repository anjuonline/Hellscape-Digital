import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MusicAnjuData from 'data/music/AnjuData';
import AnjuAlbumsStatic from 'components/archive/artist/anjuonline/music/AnjuAlbumsStatic';
import AnjuAllReleases2019Static from 'components/archive/artist/anjuonline/music/year/AnjuAllReleases2019Static';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';
import AnjuMusicYearSubindex from 'components/archive/artist/anjuonline/music/year/AnjuMusicYearSubindex';

const ArchiveMusicAnju2019 = () => {

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
          <AnjuMusicYearSubindex/>
          <AnjuAllReleases2019Static/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnju2019;
