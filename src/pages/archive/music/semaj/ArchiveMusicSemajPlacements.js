import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import SemajMusicSubindex from 'components/archive/artist/semaj/SemajMusicSubindex';
import SemajPlacementsStatic from 'components/archive/artist/semaj/music/SemajPlacementsStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicSemajPlacements = () => {
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
                <SemajPlacementsStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicSemajPlacements;