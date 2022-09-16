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
                    September 16, 2022
                </h3> 
                <p>
                    <a href="/kawaiiry/all">New Release: Kawaii Ry - Executive EP</a>
                </p>
                <h3>
                    September 14, 2022
                </h3> 
                <p>
                    <a href="/kawaiiry/all">New Release: Kawaii Ry - one left EP</a>
                </p>
                <h3>
                    September 13, 2022
                </h3> 
                <p>
                    Semaj discography has been added to the music archive.
                </p>

                <h3>
                    September 12, 2022
                </h3> 
                <p>
                    Remy3D discography has been added to the music archive.
                </p>

                <h3>
                    September 11, 2022
                </h3> 
                <p>
                    Josen, notamachine & Meauxminy discographies have been added to the music archive.
                </p>                 
  
              </div>
              <div class="containedText">               
                <h3><NavLink to={"/updates"}><i><strong>All Updates</strong></i> →</NavLink></h3>
              </div>
          </div>   
        </>
      );
    };
  export default LatestUpdates;