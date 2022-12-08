import { NavLink } from 'react-router-dom';

const LatestUpdates = () => {
    return (
        <>
          <div class="card-container">
              <div class="title-wrap-rainbow2">
                  <h2>Latest Updates</h2>
              </div>            
              <div class="containedText">

                <p><br/>Welcome to the new Hellscape Digital site! This project is a true labor of love - countless hours were spent to capture and organize the full collective's discography, and many more will be spent adding new content and features over time. Check this space often, and from the bottom of my heart - thank you for spending time in our world. <strong><i>-Anju</i></strong><br/></p>

                <h3>
                    December 2022
                </h3> 
                    <p class="changelogtext"> 
                        <ul>
                            <li>
                                <strong>&bull; <i>New Music</i></strong>
                                <ul>
                                    <li>
                                        <a href="https://hellscapedigital.net/kawaiiry/all" target="_blank;" rel="noopener noreferrer">
                                            &bull; Kawaii Ry - USED 2 THE HATE (prod. notamachine) [EP]
                                        </a>
                                    </li>
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