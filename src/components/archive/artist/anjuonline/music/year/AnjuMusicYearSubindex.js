import { NavLink } from 'react-router-dom';

const AnjuMusicYearSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Music - ANJU Online!</h2>
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
                                <NavLink to={"/anjuonline/music/all"}>All Releases (31)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            <div class="title-wrap-rainbow2">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/anjuonline/music/2022"}>2022</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/2021"}>2021</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/2020"}>2020</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/2019"}>2019</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/anjuonline/music/2018"}>2018</NavLink>
                            </div>
                        </h5>                
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default AnjuMusicYearSubindex;