import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import SemajMusicSubindex from 'components/archive/artist/semaj/SemajMusicSubindex';
import SemajAllReleasesStatic from 'components/archive/artist/semaj/music/SemajAllReleasesStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicSemaj = () => {
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
                <SemajMusicSubindex/>
                <SemajAllReleasesStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicSemaj;