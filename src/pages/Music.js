import ArchiveIndexMusicPage from 'components/archive/ArchiveIndexMusicPage';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LatestMusicAll from 'components/latest/LatestMusicAll';
import LatestMusicVideosStatic from 'components/latest/LatestMusicVideosStatic';

const Music = () => {
    return (
      <div class="main-column">
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Hellscape Digital - Music</h2>
            </div>            
            <ArchiveMusicSubindex/>
        </div> 

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Music Videos</h2>
            </div>
            <LatestMusicVideosStatic/>  
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Releases</h2>
            </div>
            <LatestMusicAll/>  
        </div>

      </div>
    );
  };
  export default Music;