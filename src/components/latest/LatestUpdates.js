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
                    December 2022
                </h3> 
                    <p class="changelogtext"> 
                        <ul>
                            <li>
                                <strong>&bull; <i>New Music</i></strong>
                                <ul>
                                    <li>
                                        <a href="https://youtu.be/0PDDyumLrYo" target="_blank;" rel="noopener noreferrer">
                                            &bull; ANJU Online! & Kawaii Ry - SWAG SUPPLIER (feat. STARINTHESKY) [Single/Music Video]
                                        </a>
                                    </li>
                                    <li><a href="https://soundcloud.com/kawaiiry/sets/bleezy-seazy" target="_blank;" rel="noopener noreferrer">&bull; Kawaii Ry - BLEEZY SEAZY VOL. 1 (prod. Chris6lair) [EP]</a></li>
                                </ul>
                            </li>
                        </ul>
                    </p>  


              </div>
              <div class="containedText">               
                <p><br/><NavLink to={"/changelog"}><i><u>Full Site Changelog</u></i><u> →</u></NavLink></p>
              </div>
          </div>   
        </>
      );
    };
  export default LatestUpdates;