import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LatestMusicAll from 'components/homepage/LatestMusicAll';

const ArchiveMusic = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Hellscape Digital - Music</h2>
            </div>            
            <ArchiveMusicSubindex/>
        </div> 
      </div>
    );
  };
  export default ArchiveMusic;