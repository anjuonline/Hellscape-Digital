import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveHellscapeRadioStatic from 'components/archive/artist/hellscape/music/ArchiveHellscapeRadioStatic';
import { NavLink } from 'react-router-dom';

const ArchiveMusicHellscapeRadio = () => {
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
                <div class="sticky">
                <div class="title-wrap-rainbow2">
                <h2>Hellscape Radio</h2>
                </div>
                </div>
                <ArchiveHellscapeRadioStatic/>
            </div>
        </div>
  
      </div>
    );
  };
  export default ArchiveMusicHellscapeRadio;