import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MeauxminyRemixesStatic from 'components/archive/artist/meauxminy/MeauxminyRemixesStatic';
import MeauxminyMusicSubindex from 'components/archive/artist/meauxminy/MeauxminyMusicSubindex';

const ArchiveMusicMeauxminyRemixes = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Archive / Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>

      <div class="card-container">
        <div class="sticky">
          <MeauxminyMusicSubindex/>
          <MeauxminyRemixesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicMeauxminyRemixes;
