import StatsMusicAnju from 'components/stats/StatsMusicAnju';
import { NavLink } from 'react-router-dom';

const ArchiveMusicAnjuSubindex = () => {
    return (
      <>
        <div class="card-container">            
            <div class="containedText">
                <h3>
                    Filter By
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                        <p>
                            <a href="/archive/artwork/anjuonline">
                                Original Releases<br/>
                            </a>
                            <a href="/archive/artwork/cloudidaze">
                                Production Credits<br/>
                            </a>
                            <a href="/archive/artwork/anjuonline">
                                DJ Sets<br/>
                            </a>
                        </p>
                </div>
            </div>
            <div class="containedText">
                <p>
                    <div class="activeLink">
                        <NavLink to={"/archive/music/anjuonline"}>
                            All Releases (<StatsMusicAnju/>)
                        </NavLink>
                    </div>
                </p>                
            </div>
        </div>
      </>
    );
  };
  export default ArchiveMusicAnjuSubindex;