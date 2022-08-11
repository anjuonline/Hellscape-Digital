import { NavLink } from 'react-router-dom';

const AnjuMusicSubindex = () => {
    return (
      <>           
            <div class="containedText">
                <h3>
                    Filter By
                </h3>                
            </div>
            <div class="flexColumn">
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline"}>
                                    All Releases<br/>
                            </NavLink>
                            </div>
                        </p>
                </div>
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline/singles"}>
                                Singles<br/>
                            </NavLink>
                            </div>
                        </p> 
                </div>
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline/remixes"}>
                                Remixes<br/>
                            </NavLink>
                            </div>
                        </p> 
                </div>
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline/djsets"}>
                                DJ Sets<br/>
                            </NavLink>
                            </div>
                        </p> 
                </div>
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline/djsets"}>
                                Placements<br/>
                            </NavLink>
                            </div>
                        </p> 
                </div>
            </div>
      </>
    );
  };
  export default AnjuMusicSubindex;