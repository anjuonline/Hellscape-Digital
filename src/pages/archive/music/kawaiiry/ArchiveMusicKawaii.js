import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import KawaiiMusicSubindex from 'components/archive/artist/kawaiiry/KawaiiMusicSubindex';
import KawaiiAllReleasesStatic from 'components/archive/artist/kawaiiry/music/KawaiiAllReleasesStatic';
import KawaiiAlbumsStatic from 'components/archive/artist/kawaiiry/music/KawaiiAlbumsStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicKawaii = () => {
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
                <KawaiiMusicSubindex/>
                <KawaiiAllReleasesStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicKawaii;