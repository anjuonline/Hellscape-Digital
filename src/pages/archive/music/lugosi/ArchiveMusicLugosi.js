import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LugosiMusicSubindex from 'components/archive/artist/lugosi/LugosiMusicSubindex';
import LugosiAllReleasesStatic from 'components/archive/artist/lugosi/music/LugosiAllReleasesStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicLugosi = () => {
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
                <LugosiMusicSubindex/>
                <LugosiAllReleasesStatic/>
                </div>
            </div>

        </div>
    );
  };
  export default ArchiveMusicLugosi;