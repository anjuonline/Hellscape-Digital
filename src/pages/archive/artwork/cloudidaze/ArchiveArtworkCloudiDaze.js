import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import CloudiDazeAllArtworkStatic from 'components/archive/artist/cloudidaze/art/CloudiDazeAllArtworkStatic';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import CloudiDazeArtworkSubindex from 'components/archive/artist/cloudidaze/art/CloudiDazeArtworkSubindex';

const ArchiveArtworkCloudiDaze = () => {

  return (
    <div class="main-column">
      
      <ArchiveIndex />
      
      <div class="card-container">
        <div class="title-wrap-rainbow2">
          <h2>Hellscape Digital - Artwork</h2>
        </div>
        <ArchiveArtworkSubindex/>
      </div>

      <div class="card-container">
        <div class="sticky">
          <CloudiDazeArtworkSubindex/>
          <CloudiDazeAllArtworkStatic/>
        </div>
      </div>

    </div>
  );
};
export default ArchiveArtworkCloudiDaze;
