import { NavLink } from 'react-router-dom';

const ArchiveMusicSubindex = () => {
    return (
      <>           
            <div class="containedText">
                <h3>
                    By Artist
                </h3>  
                <p>   
                    <div class="subindexFont">
                        <NavLink to={"/anjuonline/music/all"}>ANJU Online!</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/kawaiiry/all"}>Kawaii Ry</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/lugosi/all"}>Lugosi</NavLink>
                    </div>  
                    <div class="subindexFont">
                        <NavLink to={"/meauxminy/all"}>Meauxminy</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/josen/all"}>Josen</NavLink>
                        &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/notamachine/all"}>notamachine</NavLink>
                    </div>   
                    {/* <div class="subindexFont">
                        <NavLink to={"/archive/music/remy3d/all"}>Remy3D</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/archive/music/semaj/all"}>Semaj</NavLink>
                    </div>  */}
                </p>   
                <p>   
                    <div class="subindexFont">
                        <NavLink to={"/archive/music/hellscaperadio"}>
                            Hellscape Radio<br/>
                        </NavLink>
                    </div>  
                </p>       
            </div>
            {/* <div class="flexColumn">
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/anjuonline/all"}>
                                    ANJU Online!<br/>
                            </NavLink>
                            </div>
                        </p>
                </div>
                <div>
                        <p>
                            <div class="activeLink">
                            <NavLink to={"/archive/music/kawaiiry"}>
                                Kawaii Ry<br/>
                            </NavLink>
                            </div>
                        </p>
                </div>
            </div> */}
            {/* <div class="flexColumn">
                <div class="containedText">
                    <p>
                        <div class="activeLink">
                            <NavLink to={"/archive/music/hellscaperadio"}>
                                Hellscape Radio<br/>
                            </NavLink>
                        </div>
                    </p>
                </div>
            </div> */}
      </>
    );
  };
  export default ArchiveMusicSubindex;