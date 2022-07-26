import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import LatestMusicAll from 'components/latest/LatestMusicAll';

const ArchiveMusicAll = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive / Music</h2>
            </div>            
            <ArchiveMusicSubindex/>
        </div> 
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive / Music / All Releases</h2>
            </div>            
            <ArchiveMusicSubindex/>
        </div>
      </div>
    );
  };
  export default ArchiveMusicAll;