import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import NotamachineAllReleasesStatic from 'components/archive/artist/notamachine/NotamachineAllReleasesStatic';
import NotamachineMusicSubindex from 'components/archive/artist/notamachine/NotamachineMusicSubindex';

const ArchiveMusicNotamachine = () => {

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
          <NotamachineMusicSubindex/>
          <NotamachineAllReleasesStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveMusicNotamachine;
