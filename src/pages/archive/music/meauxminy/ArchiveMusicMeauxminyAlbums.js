import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import MeauxminyAlbumsStatic from 'components/archive/artist/meauxminy/MeauxminyAlbumsStatic';
import MeauxminyMusicSubindex from 'components/archive/artist/meauxminy/MeauxminyMusicSubindex';

const ArchiveMusicMeauxminyAlbums = () => {

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
          <MeauxminyAlbumsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicMeauxminyAlbums;
