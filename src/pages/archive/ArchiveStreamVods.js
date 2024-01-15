import ArchiveIndex from 'components/archive/ArchiveIndex';
// import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveStreamVodsStatic from 'components/archive/artist/hellscape/ArchiveStreamVodsStatic';
import StreamVodsSubindex from 'components/archive/artist/hellscape/StreamVodsSubindex';

const ArchiveStreamVods = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      {/* <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Hellscape Digital - Stream VODs</h2>
        </div>
        <ArchiveMusicSubindex/>
      </div> */}

      <div class="card-container">
        <div class="sticky">
          <StreamVodsSubindex/>
          <ArchiveStreamVodsStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveStreamVods;
