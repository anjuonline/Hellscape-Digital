import { NavLink } from 'react-router-dom';

const KawaiiMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Kawaii Ry / All Music</h2>
            </div>
            <div class="title-wrap-rainbow">
            <div class="containedText">
                <h4>
                    Filter By
                </h4>  
                <p>
                <div class="subindexFont">
                    <NavLink to={"/archive/music/anjuonline/all"}>All</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <NavLink to={"/archive/music/anjuonline/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <NavLink to={"/archive/music/anjuonline/singles"}>Features</NavLink>
                </div>
                </p>               
            </div>
            </div>
            </div>
      </>
    );
  };
  export default KawaiiMusicSubindex;