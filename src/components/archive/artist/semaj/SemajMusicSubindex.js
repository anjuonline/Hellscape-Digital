import { NavLink } from 'react-router-dom';

const SemajMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Music - Semaj</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            {/* <div class="subindexFont">
                                <NavLink to={"/semaj/albums"}>Albums & EPs</NavLink>                       
                            </div> */}
                            <div class="subindexFont">
                                <NavLink to={"/semaj/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/semaj/placements"}>Placements</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/semaj/features"}>Features</NavLink>
                                
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/semaj/all"}>All Releases (85)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default SemajMusicSubindex;