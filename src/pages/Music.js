import ArchiveIndexMusicPage from 'components/archive/ArchiveIndexMusicPage';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LatestMusicAll from 'components/homepage/LatestMusicAll';
import ArchiveMusicVideosStatic from 'components/archive/artist/hellscape/music/ArchiveMusicVideosStatic';

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
            <ArchiveMusicVideosStatic/>  
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