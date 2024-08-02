import { NavLink } from 'react-router-dom';

const LilDujourMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Music - Lil Dujour</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/lildujour/albums"}>Albums & EPs</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/lildujour/videos"}>Videos</NavLink>
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/lildujour/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/lildujour/features"}>Features</NavLink>
                            </div>
                        </h5> 
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/lildujour/all"}>All Releases (91)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default LilDujourMusicSubindex;