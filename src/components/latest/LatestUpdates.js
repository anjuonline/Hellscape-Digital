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
                November 14, 2024 - v1.1.0
            </h3> 
            <p class="containedText"> 
                <ul>
                    <li>
                        This is by far our biggest update to date - including UI improvements, a new community chatroom, hundreds of new music releases in the archive. See the changelog for full details!
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