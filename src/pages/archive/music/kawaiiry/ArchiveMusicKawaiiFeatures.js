import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import KawaiiFeaturesStatic from 'components/archive/artist/kawaiiry/music/KawaiiFeaturesStatic';
import KawaiiMusicSubindex from 'components/archive/artist/kawaiiry/KawaiiMusicSubindex';

const ArchiveMusicKawaiiFeatures = () => {

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
          <KawaiiMusicSubindex/>
          <KawaiiFeaturesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicKawaiiFeatures;
