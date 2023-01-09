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
                January 9, 2023 - v1.0.4
            </h3> 
            <p class="changelogtext"> 
                <ul>
                    <li>
                        <strong>&bull; <i>NEW MEMBER!</i></strong>
                        <ul>
                            <li>
                                <a href="https://hellscapedigital.net/rileylol/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; rileylol has officially joined Hellscape Digital
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/rileylol/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Full rileylol discography (91 releases) added to music archive
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/videos/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; 3 rileylol videos added to music videos archive
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </p> 

                <h3>
                    January 2023 (All Updates)
                </h3> 
                <p class="changelogtext"> 
                <ul>
                    <li>
                        <strong>&bull; <i>New Music</i></strong>
                        <ul>
                            <li>
                                <a href="https://hellscapedigital.net/rileylol/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; rileylol - next lifetime EP [7 tracks]
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/notamachine/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; notamachine - dont4getme (feat. Kawaii Ry)
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/notamachine/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Loudpak Shawty - Slow It Down (prod. notamachine)
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/semaj/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Semaj - Smile
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/semaj/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Semaj - Worth It
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/semaj/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Semaj - Only For Tonight
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/kawaiiry/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Kawaii Ry - Last Weekend (prod. notamachine & Joe Leytrick)
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/kawaiiry/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Kawaii Ry - Glo Baby LP [7 tracks]
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/kawaiiry/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Kawaii Ry - Make Your World EP (prod. Jang) [3 tracks]
                                </a>
                            </li>
                            <li>
                                <a href="https://hellscapedigital.net/kawaiiry/all" target="_blank;" rel="noopener noreferrer">
                                    &bull; Kawaii Ry - Flip That (prod. Culoso)
                                </a>
                            </li>
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