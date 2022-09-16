import { NavLink } from 'react-router-dom';

const LatestMusicAll = () => {
    return (
      <>
        <div class="gallery_containerThree-static"> 

        <div class="gallery_item">
            <p class="gallery-tag">EP</p>
            <a href="https://soundcloud.com/kawaiiry/sets/ugly-tape" target="_blank" rel="noopener noreferrer">
              <img src="https://i1.sndcdn.com/artworks-wckpAbEaOz0AbvyM-odUPvw-t500x500.jpg" width="100%" alt=""/><br/>
              <p class="gallery-text">
                <strong>Kawaii Ry - Executive</strong><br/>
                (prod. uglyboy)
              </p>
            </a>
          </div>

        <div class="gallery_item">
            <p class="gallery-tag">EP</p>
            <a href="https://soundcloud.com/kawaiiry/sets/one-left" target="_blank" rel="noopener noreferrer">    
              <img src="https://i1.sndcdn.com/artworks-Q4zox4LUoIM5aTyY-vfsBrg-t500x500.jpg" width="100%" alt=""/><br/>
              <p class="gallery-text">
                <strong>Kawaii Ry - one left</strong><br/>
              </p>
            </a>
          </div>

        <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://soundcloud.com/liljosen/visa-prod-leovisa" target="_blank" rel="noopener noreferrer">    
              <img src="https://i1.sndcdn.com/artworks-wgyCob9yoY8t211z-uVZwMQ-t500x500.jpg" width="100%" alt=""/><br/>
              <p class="gallery-text">
                <strong>Josen</strong><br/>
                VISA<br/>
                (prod. LEOVISA)
              </p>
            </a>
          </div>

        <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://soundcloud.com/kawaiiry/dont-wait-on-me-prod-notamachine" target="_blank" rel="noopener noreferrer">    
              <img src="https://i1.sndcdn.com/artworks-QbXT8DAWeJKslcgo-p9zfcA-t500x500.jpg" width="100%" alt=""/><br/>
              <p class="gallery-text">
                <strong>Kawaii Ry</strong><br/>
                DONT WAIT ON ME<br/>
                (prod. notamachine)
              </p>
            </a>
          </div>

        <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://soundcloud.com/kawaiiry/6-days-prod-bleachh-x-notamachine" target="_blank" rel="noopener noreferrer">    
              <img src="https://i1.sndcdn.com/artworks-JV5gTbocgcCq9Jzm-3ti4zA-t500x500.jpg" width="100%" alt=""/><br/>
              <p class="gallery-text">
                <strong>Kawaii Ry</strong><br/>
                6 Days<br/>
                (prod. Bleachh, notamachine)
              </p>
            </a>
          </div>

          <div class="gallery_item">
            <p class="gallery-tag">DJ Set</p>
            <a href="https://soundcloud.com/eauxminy/club-kawaii-mix" target="_blank" rel="noopener noreferrer">    
              <img src="https://i1.sndcdn.com/artworks-Qv5Ft6dyNjd4CyCd-Zrh9Bg-t500x500.jpg" width="100%" alt=""/><br/>
              <p class="gallery-text">
                <strong>Meauxminy</strong><br/>
                Meauxminy @ Club Kawaii
              </p>
            </a>
          </div>

                <div class="gallery_item">
                    <p class="gallery-tag">Single</p>
                    <a href="https://open.spotify.com/track/1AYPa7Fn3NhxQXzU6Z5jsA?si=ee7672cbf6454f2c" target="_blank" rel="noopener noreferrer">    
                    <img src="https://i.scdn.co/image/ab67616d0000b27382c44367bee2d4fcf3ec9ae8" width="100%" alt=""/><br/>
                    <p class="gallery-text">
                        <strong>Lugosi</strong><br/>
                        ghostsinthewalls<br/>
                        (prod. ANJU Online!)
                    </p>
                    </a>
                </div>

                <div class="gallery_item">
                    <p class="gallery-tag">Single</p>
                    <a href="https://soundcloud.com/kawaiiry/creed-prod-notamachine-x-kal" target="_blank" rel="noopener noreferrer">    
                    <img src="https://i1.sndcdn.com/artworks-ySGDb77ncikjS3Kg-G0K2wQ-t500x500.jpg" width="100%" alt=""/><br/>
                    <p class="gallery-text">
                        <strong>Kawaii Ry</strong><br/>
                        Creed<br/>
                        (prod. Notamachine, Kalpierce)
                    </p>
                    </a>
                </div>
                
                <div class="gallery_item">
                    <p class="gallery-tag">Single</p>
                    <a href="https://soundcloud.com/kawaiiry/gremlin-prod-notamachine-gotti" target="_blank" rel="noopener noreferrer">    
                        <img src="https://i1.sndcdn.com/artworks-U6SOdW1tFlB0pcSw-Ly4zwA-t500x500.jpg" width="100%" alt=""/><br/>
                        <p class="gallery-text">
                            <strong>Kawaii Ry</strong><br/>
                            Gremlin<br/>
                            (Prod. Notamachine + Gotti)
                        </p>
                    </a>
                </div>                

            </div>
            <div class="containedText">               
              <p><NavLink to={"/archive/music"}><i><strong>All Music</strong></i> →</NavLink></p>
            </div>
      </>
    );
  };
  export default LatestMusicAll;