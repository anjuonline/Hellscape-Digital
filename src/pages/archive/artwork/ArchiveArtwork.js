import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import StatsArtworkAll from 'components/stats/StatsArtworkAll';
import LatestArtworkAll from 'components/homepage/LatestArtworkAll';

const ArchiveArtwork = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <ArchiveArtworkSubindex></ArchiveArtworkSubindex>
      </div>
    );
  };
  export default ArchiveArtwork;