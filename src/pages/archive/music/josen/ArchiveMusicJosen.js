import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import JosenMusicSubindex from 'components/archive/artist/josen/JosenMusicSubindex';
import JosenAllReleasesStatic from 'components/archive/artist/josen/music/JosenAllReleasesStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicJosen = () => {
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
                <JosenMusicSubindex/>
                <JosenAllReleasesStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicJosen;