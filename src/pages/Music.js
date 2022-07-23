import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Music = () => {
  return (
    <div class="main-column">

        <div class="card-container">
            <div class="title-wrap-rainbow">
                    <h2>Hellscape Digital / Music</h2>
            </div>            
            <div class="containedText">
                <h3>
                    By Artist
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                    <a href="#anju">
                        <p>
                            ANJU Online!<br/>
                            Josen<br/>
                            Meauxminy<br/>
                            Remy3D<br/>
                        </p>
                    </a>
                </div>
                <div class="containedText">
                    <a href="#cloudi">
                        <p>
                            Kawaii Ry<br/>
                            Lugosi<br/>
                            Notamachine<br/>
                            Semaj<br/>
                        </p>
                    </a>    
                </div>
            </div>
            <div class="containedText">
                <h3>
                    Mixes
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                    <a href="#anju">
                        <p>
                            Hellscape Radio<br/>
                            DJ Sets
                        </p>
                    </a>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                    <h2>Music / Latest Releases</h2>
                </div>
                <div class="gallery_containerThree">
                    <div class="gallery_item">
                        <p class="gallery-tag">Single</p><img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Kawaii Ry</strong><br/>KILLMILORD Freestyle<br/>(Prod. Foreigner2x)</p>
                    </div>    
                    <div class="gallery_item">
                        <p class="gallery-tag">Single</p><img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Josen</strong><br/>BITCH!YOU!A!DUB!<br/>(Prod. Snake)</p>
                    </div> 
                    <div class="gallery_item">
                        <p class="gallery-tag">Album</p><img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Notamachine</strong><br/>Artificial</p>
                    </div>   
                    <div class="gallery_item">
                        <p class="gallery-tag">Single</p><img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Kawaii Ry</strong><br/>KILLMILORD Freestyle<br/>(Prod. Foreigner2x)</p>
                    </div>    
                    <div class="gallery_item">
                        <p class="gallery-tag">Single</p><img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Josen</strong><br/>BITCH!YOU!A!DUB!<br/>(Prod. Snake)</p>
                    </div> 
                    <div class="gallery_item">
                        <p class="gallery-tag">Album</p><img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Notamachine</strong><br/>Artificial</p>
                    </div>                                         
                </div>  
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                    <h2>Music / ANJU Online!</h2>
                </div>
                <div class="gallery_containerThree">
                    <div class="gallery_item">
                        <p class="gallery-tag">DJ Set</p><img src="https://i1.sndcdn.com/artworks-vejMf4Oh790upIGy-zsTVPA-t500x500.jpg" width="100%"/><br/><p class="gallery-text">ANJU Online! @ Club Kawaii<br/>DJ Set</p>
                    </div>    
                    <div class="gallery_item">
                        <img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Josen</strong><br/>BITCH!YOU!A!DUB!<br/>(Prod. Snake)</p>
                    </div> 
                    <div class="gallery_item">
                        <img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Notamachine</strong><br/>Artificial</p>
                    </div>   
                    <div class="gallery_item">
                        <img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Kawaii Ry</strong><br/>KILLMILORD Freestyle<br/>(Prod. Foreigner2x)</p>
                    </div>    
                    <div class="gallery_item">
                        <img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Josen</strong><br/>BITCH!YOU!A!DUB!<br/>(Prod. Snake)</p>
                    </div> 
                    <div class="gallery_item">
                        <img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Notamachine</strong><br/>Artificial</p>
                    </div>                                         
                </div>  
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2 id="cloudi">Artwork / Cloudi Daze</h2>
            </div> 
            <div class="masonry-wrap">
                <Masonry columnsCount={2} gutter={"0.75em"}>
                    <img src="https://pbs.twimg.com/media/FYHzDnmUIAAgKp7?format=jpg&name=large"/>
                </Masonry>
            </div>
            <p>
                Full Gallery
            </p>
        </div>

    </div>
  );
};
export default Music;