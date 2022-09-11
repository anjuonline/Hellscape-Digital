import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import JosenSinglesStatic from 'components/archive/artist/josen/music/JosenSinglesStatic';
import JosenMusicSubindex from 'components/archive/artist/josen/JosenMusicSubindex';

const ArchiveMusicJosenSingles = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Archive - Music</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div>

      <div class="card-container">
        <div class="sticky">
          <JosenMusicSubindex/>
          <JosenSinglesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicJosenSingles;
