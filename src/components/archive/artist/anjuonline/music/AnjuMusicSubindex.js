import { NavLink } from 'react-router-dom';

const AnjuMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Archive / Music / ANJU Online!</h2>
            </div>
            <div class="title-wrap-rainbow">
            <div class="containedText">
                <h4>
                    Filter By
                </h4>  
                <p>
                <div class="subindexFont">
                <NavLink to={"/archive/music/anjuonline/albums"}>Albums</NavLink><br/><br/>
                    <NavLink to={"/archive/music/anjuonline/all"}>All</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <NavLink to={"/archive/music/anjuonline/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <NavLink to={"/archive/music/anjuonline/remixes"}>Remixes</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <NavLink to={"/archive/music/anjuonline/placements"}>Placements</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                    <NavLink to={"/archive/music/anjuonline/djsets"}>DJ Sets</NavLink>
                </div>
                </p>               
            </div>
            </div>
            </div>
      </>
    );
  };
  export default AnjuMusicSubindex;