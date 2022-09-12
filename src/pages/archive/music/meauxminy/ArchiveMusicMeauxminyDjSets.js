import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MeauxminyDjSetsStatic from 'components/archive/artist/meauxminy/MeauxminyDjSetsStatic';
import MeauxminyMusicSubindex from 'components/archive/artist/meauxminy/MeauxminyMusicSubindex';

const ArchiveMusicMeauxminyDjSets = () => {

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
          <MeauxminyMusicSubindex/>
          <MeauxminyDjSetsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicMeauxminyDjSets;
