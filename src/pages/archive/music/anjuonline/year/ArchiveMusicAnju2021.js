import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import AnjuAllReleases2021Static from 'components/archive/artist/anjuonline/music/year/AnjuAllReleases2021Static';
import AnjuMusicYearSubindex from 'components/archive/artist/anjuonline/music/year/AnjuMusicYearSubindex';

const ArchiveMusicAnju2021 = () => {

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
          <AnjuAllReleases2021Static/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnju2021;
