import { NavLink } from 'react-router-dom';

const CloudiDazeArtworkSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Artwork - Cloudi Daze</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        {/* <h5>
                            <div class="subindexFont">
                                <NavLink to={"/cloudidaze/art/illustration"}>Illustration</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/cloudidaze/art/design"}>Design</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/cloudidaze/art/misc"}>Mixed Media</NavLink>
                            </div>
                        </h5>    */}
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/cloudidaze/all"}>All Artwork</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default CloudiDazeArtworkSubindex;