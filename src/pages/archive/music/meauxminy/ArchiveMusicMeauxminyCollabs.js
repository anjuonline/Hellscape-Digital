import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MeauxminyCollabsStatic from 'components/archive/artist/meauxminy/MeauxminyCollabsStatic';
import MeauxminyMusicSubindex from 'components/archive/artist/meauxminy/MeauxminyMusicSubindex';

const ArchiveMusicMeauxminyCollabs = () => {

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
          <MeauxminyCollabsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicMeauxminyCollabs;
