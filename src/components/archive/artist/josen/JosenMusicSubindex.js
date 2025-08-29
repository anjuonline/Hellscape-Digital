import { NavLink } from 'react-router-dom';

const JosenMusicSubindex = () => {
    return (
      <>           
            <div class="sticky">
            <div class="title-wrap-rainbow2">
            <h2>Music - Josen</h2>
            </div>
            <div class="title-wrap-rainbow">
                <div class="subindexContainer">
                    <div class="containedText">
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/josen/albums"}>Albums & EPs</NavLink>                       
                            </div>
                            <div class="subindexFont">
                                <NavLink to={"/josen/singles"}>Singles</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                                <NavLink to={"/josen/features"}>Features</NavLink>
                            </div>
                        </h5>   
                        <h5>
                            <div class="subindexFont">
                                <NavLink to={"/josen/all"}>All Releases (196)</NavLink>
                            </div>
                        </h5>              
                    </div>
                </div>
            </div>
            </div>
      </>
    );
  };
  export default JosenMusicSubindex;