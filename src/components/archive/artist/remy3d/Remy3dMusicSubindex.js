import { NavLink } from 'react-router-dom';

const Remy3dMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Music - Remy3D</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            {/* <div class="subindexFont">
                                <NavLink to={"/remy3d/albums"}>Albums & EPs</NavLink>                       
                            </div> */}
                            <div class="subindexFont">
                                <NavLink to={"/remy3d/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/remy3d/placements"}>Placements</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/remy3d/features"}>Features</NavLink>
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/remy3d/all"}>All Releases (13)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default Remy3dMusicSubindex;