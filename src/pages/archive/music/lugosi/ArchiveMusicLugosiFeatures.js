import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LugosiFeaturesStatic from 'components/archive/artist/lugosi/music/LugosiFeaturesStatic';
import LugosiMusicSubindex from 'components/archive/artist/lugosi/LugosiMusicSubindex';

const ArchiveMusicLugosiFeatures = () => {

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
          <LugosiFeaturesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicLugosiFeatures;
