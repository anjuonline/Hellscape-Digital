import ArchiveIndexMusicPage from 'components/archive/ArchiveIndexMusicPage';
import { CrossSymbol } from 'utils/Symbols';
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
                <h2>Latest Releases</h2>
            </div>
            <LatestMusicAll/>  
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Music Videos</h2>
            </div>
            <LatestMusicVideosStatic/>  
        </div>

        <div class="subindexFont">
                <p><br/>
                <a href="https://www.youtube.com/@HELLSCAPEDIGITAL" target="_blank;" rel="noopener noreferrer">YouTube</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://soundcloud.com/hellscapedigital" target="_blank" rel="noopener noreferrer">Soundcloud</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://twitter.com/H3LLSC4P3" target="_blank;" rel="noopener noreferrer">Twitter</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://www.instagram.com/hellscapedigital/" target="_blank;" rel="noopener noreferrer">Instagram</a><br/><br/>
                </p>
                <p class="footerFont1">
                2019-2023 &copy; Hellscape Digital<br/><br/></p>
            </div> 

      </div>
    );
  };
  export default Music;