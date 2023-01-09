import { NavLink } from 'react-router-dom';

const RileylolMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Music - rileylol</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/rileylol/eps"}>EPs</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/rileylol/videos"}>Videos</NavLink>
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/rileylol/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/rileylol/features"}>Features</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/rileylol/sets"}>Sets</NavLink>
                            </div>
                        </h5> 
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/rileylol/all"}>All Releases (91)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default RileylolMusicSubindex;