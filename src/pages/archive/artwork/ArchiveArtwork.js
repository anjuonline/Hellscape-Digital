import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveArtworkSubindex from 'components/archive/ArchiveArtworkSubindex';

const ArchiveArtwork = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Hellscape Digital - Artwork</h2>
            </div>            
            <ArchiveArtworkSubindex/>
        </div> 
      </div>
    );
  };
  export default ArchiveArtwork;