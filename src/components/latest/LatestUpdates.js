import { NavLink } from 'react-router-dom';

const LatestUpdates = () => {
    return (
        <>
          <div class="card-container">
              <div class="title-wrap-rainbow2">
                  <h2>Latest Updates</h2>
              </div>            
              <div class="containedText">


              <h3>
                    November 18, 2022
                </h3> 
                    <p class="changelogtext">
                        <ul>
                            <li>
                                <strong>&bull; <i>New Music</i></strong>
                                <ul>
                                    <li>&bull; ANJU Online & Kawaii Ry - Mr. Drill / pist off</li>
                                </ul>
                            </li>
                        </ul> 
                        <ul>
                            <li>
                                <strong>&bull; <i>New Artwork</i></strong>
                                <ul>
                                    <li>&bull; 41 Cloudi Daze illustrations added to artwork archive</li>
                                    <li>&bull; 1 ANJU Online! illustration added to artwork archive</li>
                                </ul>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <strong>&bull; <i>Site Upgrades</i></strong>
                                <ul>
                                    <li>&bull; Cloudi Daze portfolio reinstated to artwork archive</li>
                                </ul>
                            </li>
                        </ul> 
                    </p>                 
              </div>
              <div class="containedText">               
                <h3><NavLink to={"/changelog"}><i><strong>Full Site Changelog</strong></i> →</NavLink></h3>
              </div>
          </div>   
        </>
      );
    };
  export default LatestUpdates;