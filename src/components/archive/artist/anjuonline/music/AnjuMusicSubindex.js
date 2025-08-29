import { NavLink } from 'react-router-dom';

const AnjuMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>ANJU Online!</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/anjuonline/music/albums"}>Albums</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/videos"}>Videos</NavLink>
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/anjuonline/music/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/remixes"}>Remixes</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/placements"}>Placements</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/djsets"}>DJ Sets</NavLink>
                            </div>
                        </h5> 
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/anjuonline/music/all"}>All Releases (55)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default AnjuMusicSubindex;