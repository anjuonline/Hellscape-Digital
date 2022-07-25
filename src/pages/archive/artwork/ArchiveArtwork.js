import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';
import StatsArtworkAll from 'components/stats/StatsArtworkAll';
import LatestArtworkAll from 'components/content/LatestArtworkAll';

const ArchiveArtwork = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <ArchiveArtworkSubindex></ArchiveArtworkSubindex>
        <div class="card-container">
            <div class="sticky">
                <div class="title-wrap-rainbow2">
                    <h2>Recent Art</h2>
                </div>  
            </div>
            <LatestArtworkAll/>           
        </div> 
      </div>
    );
  };
  export default ArchiveArtwork;