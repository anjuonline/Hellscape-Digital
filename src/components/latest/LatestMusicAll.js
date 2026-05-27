import { NavLink } from 'react-router-dom';

const LatestMusicAll = () => {
    return (
      <>
        <div class="gallery_containerThree-static"> 

        <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://open.spotify.com/track/1eysiEKpsogwt7kmRmtcrg?si=5cffbadb044c4340" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-XEyew8z9UpoVR99A-Ctn5Dg-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>ANJU Online!</strong><br/>
                Away Message
              </p>
            </a>
          </div> 

        <div class="gallery_item">
            <p class="gallery-tag">DJ Set</p>
            <a href="https://soundcloud.com/eauxminy/club-kawaii-meauxminy-guest-spot" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-p8ru6SzyL81sWu3L-ODcRvQ-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Meauxminy</strong><br/>
                Meauxminy @ Club Kawaii (Hosted by ANJU Online!)
              </p>
            </a>
          </div>

        <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://open.spotify.com/track/6guHBxRr1BVszzT7TwlC6N?si=68c91bb7ec1344cd" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-GyyxDhzpIwTOfwwP-zw68rg-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Lugosi</strong><br/>
                girlinmyphone 2 (feat. riley west)<br/>(prod. notamachine)
              </p>
            </a>
          </div> 

                  <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://open.spotify.com/track/6guHBxRr1BVszzT7TwlC6N?si=68c91bb7ec1344cd" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-CZ7BMRl0nFSQ6CKZ-XgtLzQ-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Lugosi</strong><br/>
                bile&toxins<br/>(prod. secre)
              </p>
            </a>
          </div>     

                  <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://open.spotify.com/track/0PLxCWe3Xygp5Akq8F3muI?si=d29500663a92478e" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-FGDPQiqHhxz5diwM-vZ7gqA-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Lugosi</strong><br/>
                bile&toxins $$$<br/>(prod. secre)
              </p>
            </a>
          </div>  

                  <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://open.spotify.com/track/3dR5dR9c1Ufr1f3vXMSMpi?si=991af5f56b1549bc" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-o16oWS7gN8uuQzO8-EVXIFA-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Lugosi</strong><br/>
                bile&toxins ^^^<br/>(prod. secre)
              </p>
            </a>
          </div>    

                  <div class="gallery_item">
            <p class="gallery-tag">Album</p>
            <a href="https://open.spotify.com/album/7kNw1HCiOzeb4cNE5Njs7b?si=iJuDbqAHQS2tzGljBhrVJA" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i.scdn.co/image/ab67616d00001e0213e5396fe4b85d93edfe0f4d" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>notamachine</strong><br/>
                ideas, nowhere<br/>
              </p>
            </a>
          </div>                                       

          <div class="gallery_item">
            <p class="gallery-tag">Album</p>
            <a href="https://open.spotify.com/album/34zYfGetvk75MwtyN4oThG?si=1D7d9jUpQxu30GFv9zodrA" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i.scdn.co/image/ab67616d00001e0229b2f2cd2fbaf161ab86bbeb" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Kawaii Ry & Meauxminy</strong><br/>
                Visions
              </p>
            </a>
          </div>

          <div class="gallery_item">
            <p class="gallery-tag">Single</p>
            <a href="https://open.spotify.com/track/3g84iSHpzN7UwVHbCDyROM?si=08a3313a666e4b71" target="_blank" rel="noopener noreferrer">
              <div class="overflow-hidden">
                <img src="https://i1.sndcdn.com/artworks-HnXwvyVUppgOvdvH-ZzcIBw-t500x500.jpg" width="100%" alt="" class="hover-zoom"/>
              </div>
              <p class="gallery-text">
                <strong>Josen</strong><br/>
                FDB2T (prod. notamachine)
              </p>
            </a>
          </div>

          </div>

          <div class="containedText">               
            <p><NavLink to={"/archive/music"}><i><u>All Music</u></i><u> →</u></NavLink></p>
          </div>
      </>
    );
  };
  export default LatestMusicAll;