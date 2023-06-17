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
                June 17, 2023 - v1.0.14
            </h3> 
            <p class="changelogtext"> 
                <ul>
                    <li>
                        <strong>&bull; <i>New Music</i></strong>
                        <ul>
                            <li>
                                <a href="/kawaiiry/albums">
                                    &bull; Kawaii Ry & chris6lair - BLEEZY SEAZY III [Album]
                                </a>
                            </li>
                            <li>
                                <a href="/notamachine/all">
                                    &bull; sphere merchants - trust (prod. notamachine) [Single]
                                </a>
                            </li>
                            <li>
                                <a href="/kawaiiry/features">
                                    &bull; Kodak Black - New Girl (feat. Kawaii Ry) [Single]
                                </a>
                            </li>
                            <li>
                                <a href="/kawaiiry/albums">
                                    &bull; Kawaii Ry & notamachine - Alone Together [Album]
                                </a>
                            </li>
                            <li>
                                <a href="/semaj/all">
                                    &bull; Semaj - Keep Quiet [Single]
                                </a>
                            </li>
                            <li>
                                <a href="https://open.spotify.com/track/6XOdRRqu65ZxZJlNl72Bzm?si=0db04b58019a42c3">
                                    &bull; Kawaii Ry & Remy3D - Horseshoes and Buddhaman [Single]
                                </a>
                            </li>
                            <li>
                                <a href="/notamachine/all">
                                    &bull; Tomali & Ptown - BEN10 (prod. notamachine) [Single]
                                </a>
                            </li>
                            <li>
                                <a href="/notamachine/all">
                                    &bull; Tomali & Ptown - ALL4LUV (prod. notamachine) [Single]
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>

                {/* <h3>
                    2023 (All Updates)
                </h3> 
                <p class="changelogtext"> 
                <ul>
                    <li>
                        <strong>&bull; <i>New Music</i></strong>
                        <ul>
                            <li>
                                <a href="https://hellscapedigital.net/kawaiiry/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; 01/31/23: Kawaii Ry - Club Kawaii [20 tracks]
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/josen/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; 01/28/23: Josen - Drill La Drill (Intro) (prod. notamachine)
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/semaj/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; 01/20/23: Semaj - All For Nothing
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </p> */}


              </div>
              <div class="containedText">               
                <p><br/><NavLink to={"/changelog"}><i><u>Full Site Changelog</u></i><u> →</u></NavLink></p>
              </div>
          </div>   
        </>
      );
    };
  export default LatestUpdates;