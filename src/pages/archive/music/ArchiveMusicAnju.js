import ArchiveIndex from 'components/archive/ArchiveIndex';
import ArchiveMusicSubindex from 'components/archive/ArchiveMusicSubindex';
import ArchiveMusicAnjuAll from 'components/archive/artist/anjuonline/ArchiveMusicAnjuAll';
import ArchiveMusicAnjuSubindex from 'components/archive/artist/anjuonline/ArchiveMusicAnjuSubindex';
import StatsMusicAnju from 'components/stats/StatsMusicAnju';
import { NavLink } from 'react-router-dom';

const ArchiveMusicAnju = () => {
    return (
      <div class="main-column">
        <ArchiveIndex/>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive / Music</h2>
            </div>            
            <ArchiveMusicSubindex/>
        </div> 
        <div class="card-container">
            <div class="sticky">
                <div class="title-wrap-rainbow2">
                    <h2><NavLink to="/archive/music">Archive / Music</NavLink> / <NavLink to="#">ANJU Online!</NavLink></h2>
                </div> 
            </div>   
            <ArchiveMusicAnjuSubindex/>         
            <ArchiveMusicAnjuAll/>
        </div> 
  
      </div>
    );
  };
  export default ArchiveMusicAnju;