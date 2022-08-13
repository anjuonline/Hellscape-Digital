import { NavLink } from 'react-router-dom';

const ArchiveArtworkSubindex = () => {
    return (
      <>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive / Artwork</h2>
            </div>            
            <div class="containedText">
                <h3>
                    By Artist
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                        <p>
                            <a href="/archive/artwork/anjuonline">
                                ANJU Online!<br/>
                            </a>
                        </p>
                </div>
                <div class="containedText">
                        <p>
                            <a href="/archive/artwork/cloudidaze">
                                Cloudi Daze<br/>
                            </a>
                        </p> 
                </div>
            </div>
            <div class="containedText">
              <div class="activeLink">
                  <NavLink to={"/archive/artwork/all"}>
                      All Art
                  </NavLink>
              </div>  
            </div>
        </div>
      </>
    );
  };
  export default ArchiveArtworkSubindex;