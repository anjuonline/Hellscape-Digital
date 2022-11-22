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
                    November 20, 2022
                </h3> 
                    <p class="changelogtext"> 
                        <ul>
                            <li>
                                <strong>&bull; <i>New Music</i></strong>
                                <ul>
                                <li>&bull; Kawaii Ry - Fruity Pebbles (prod. notamachine, depart & dynoxmusic)</li>
                                <li>&bull; Kawaii Ry - It Happened (prod. Pand)</li>
                                <li>&bull; Lugosi - LUGOSI LP (9 tracks)</li>
                                <li>&bull; Lugosi - BREAKING UP (prod. notamachine & Gotti)</li>
                                <li>&bull; Josen - LEAVIN EM STUCK' w/ REROCK! (prod. REROCK / mashup by Geist)</li>
                                <li>&bull; Josen - LOLLIPOP (prod. TONTO)</li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>&bull; <i>Site Upgrades</i></strong>
                                <ul>
                                <li>&bull; Albums page added to Lugosi archive</li>
                                </ul>
                            </li>
                        </ul>
                    </p>                
              </div>
              <div class="containedText">               
                <p><NavLink to={"/changelog"}><i><u>Full Site Changelog</u></i><u> →</u></NavLink></p>
              </div>
          </div>   
        </>
      );
    };
  export default LatestUpdates;