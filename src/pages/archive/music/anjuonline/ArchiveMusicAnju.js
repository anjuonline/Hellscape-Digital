import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import AnjuAlbumsStatic from 'components/archive/artist/anjuonline/music/AnjuAlbumsStatic';
import AnjuAllReleasesStatic from 'components/archive/artist/anjuonline/music/AnjuAllReleasesStatic';
import AnjuMusicSubindex from 'components/archive/artist/anjuonline/music/AnjuMusicSubindex';
import AnjuMusicYearSubindex from 'components/archive/artist/anjuonline/music/year/AnjuMusicYearSubindex';

const ArchiveMusicAnju = () => {

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
            {/* <AnjuMusicYearSubindex/> */}
            <AnjuMusicSubindex/>
            <AnjuAllReleasesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicAnju;
