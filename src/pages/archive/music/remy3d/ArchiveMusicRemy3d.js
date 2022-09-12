import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import Remy3dMusicSubindex from 'components/archive/artist/remy3d/Remy3dMusicSubindex';
import Remy3dAllReleasesStatic from 'components/archive/artist/remy3d/music/Remy3dAllReleasesStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicRemy3d = () => {
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
                <Remy3dMusicSubindex/>
                <Remy3dAllReleasesStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicRemy3d;