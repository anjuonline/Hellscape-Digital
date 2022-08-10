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
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline"}>
                                    ANJU Online!<br/>
                            </NavLink>
                            </div>
                </div>
                <div class="containedText">
                            <div class="activeLink">
                            <NavLink to={"/archive/music/kawaiiry"}>
                                Kawaii Ry<br/>
                            </NavLink>
                            </div>
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
                        <div class="activeLink">
                            <NavLink to={"/archive/music/hellscaperadio"}>
                                Hellscape Radio<br/>
                            </NavLink>
                        </div>
                    </p>
                    <p> 
                        <div class="activeLink">           
                            <NavLink to={"/archive/music/all"}>
                                All Releases (<StatsMusicAll/>)
                            </NavLink>
                        </div>
                    </p>
                </div>
            </div>
      </>
    );
  };
  export default ArchiveMusicSubindex;