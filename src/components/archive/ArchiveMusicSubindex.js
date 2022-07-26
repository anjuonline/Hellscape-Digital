import StatsMusicAll from 'components/stats/StatsMusicAll';
import { NavLink } from 'react-router-dom';

const ArchiveMusicSubindex = () => {
    return (
      <>           
            <div class="containedText">
                <h3>
                    By Artist
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                        <p>
                            <a href="/archive/music/anjuonline">
                                ANJU Online!<br/>
                            </a>
                        </p>
                </div>
                <div class="containedText">
                        <p>
                            <a href="/archive/music/kawaiiry">
                                Kawaii Ry<br/>
                            </a>
                        </p> 
                </div>
            </div>
            <div class="containedText">
                <h3>
                    Mixes
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                    <p>
                        <a href="/archive/music/hellscaperadio">
                            Hellscape Radio<br/>
                        </a>
                    </p>
                    <p>            
                        <NavLink to={"/archive/music/all"}>
                            All Releases (<StatsMusicAll/>)
                        </NavLink>
                    </p>
                </div>
            </div>
      </>
    );
  };
  export default ArchiveMusicSubindex;