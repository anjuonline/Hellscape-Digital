import ArchiveIndexMusicPage from 'components/archive/ArchiveIndexMusicPage';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LatestMusicAll from 'components/homepage/LatestMusicAll';

const Music = () => {
    return (
      <div class="main-column">
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Hellscape Digital - Music</h2>
            </div>            
            <ArchiveMusicSubindex/>
        </div> 
      </div>
    );
  };
  export default Music;