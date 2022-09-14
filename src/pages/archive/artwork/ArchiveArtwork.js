import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import LatestArtworkAll from 'components/latest/LatestArtworkAll';

const ArchiveArtwork = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <ArchiveArtworkSubindex></ArchiveArtworkSubindex>
      </div>
    );
  };
  export default ArchiveArtwork;