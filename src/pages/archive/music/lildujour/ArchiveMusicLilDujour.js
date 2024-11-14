import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LilDujourMusicSubindex from 'components/archive/artist/lildujour/LilDujourMusicSubindex';
import LilDujourAllReleasesStatic from 'components/archive/artist/lildujour/music/LilDujourAllReleasesStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicLilDujour = () => {
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
                <LilDujourMusicSubindex/>
                <LilDujourAllReleasesStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicLilDujour;