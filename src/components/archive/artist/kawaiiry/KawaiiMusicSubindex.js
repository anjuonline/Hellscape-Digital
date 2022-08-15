import { NavLink } from 'react-router-dom';

const KawaiiMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Archive / Music / Kawaii Ry</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/archive/music/kawaiiry/albums"}>Albums</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/archive/music/kawaiiry/eps"}>EPs & Mixtapes</NavLink>
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/archive/music/kawaiiry/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/archive/music/kawaiiry/features"}>Features</NavLink>
                            </div>
                        </h5> 
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/archive/music/kawaiiry/all"}>All Releases (245)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default KawaiiMusicSubindex;