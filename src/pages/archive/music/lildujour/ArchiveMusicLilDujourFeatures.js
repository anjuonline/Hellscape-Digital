import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import JosenFeaturesStatic from 'components/archive/artist/josen/music/JosenFeaturesStatic';
import JosenMusicSubindex from 'components/archive/artist/josen/JosenMusicSubindex';

const ArchiveMusicJosenFeatures = () => {

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
          <JosenMusicSubindex/>
          <JosenFeaturesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicJosenFeatures;
