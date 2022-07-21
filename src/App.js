import './App.css';

function App() {
  return (
    <>
    <main>
        <h1 class="mainTitle">
            Hellscape Digital
        </h1>  
    </main>
    
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#music">Releases</a>
        <a href="#members">Artists</a>
        <a href="#archive">Archive</a>
        <a href="#store">Store</a>
    </div>

    <div class="main-column">
        <div class="cardContainerPurple">
            <div class="containedText">
                <p>
                    Hellscape Digital is an artist collective and friend group; a creative multiverse driven by music, fashion, design, gaming, and avant-garde web culture.
                </p>
                <p>
                    This website is a constant work in progress—an evolving omnibus of Hellscape's full music & art catalog, new releases, upcoming events, and documentation of our work as artists.
                </p>
            </div>
        </div>

        <div class="cardContainerRed">
            <div class="titleWrapRed">
                <h2>Update - July 18, 2022</h2>
            </div>            
            <div class="containedText">
                <p>
                    Welcome to the new Hellscape Digital site! Take a look around and explore the pages, but keep in mind that pretty much nothing works yet. More updates to follow.
                </p>                
            </div>
        </div>        

        <div class="cardContainerOrange">
            <div class="titleWrapOrange">
                <h2>Latest Releases</h2>
            </div>
            <h3>Music</h3>
            <div class="gallery_containerThree">
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="galleryText"><strong>Kawaii Ry</strong><br/> KILLMILORD Freestyle (Prod. Foreigner2x)</p>
                </div>    
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="galleryText"><strong>Josen</strong><br/> BITCH!YOU!A!DUB! (Prod. Snake)</p>
                </div> 
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="galleryText"><strong>Notamachine</strong><br/> Artificial</p>
                </div>   
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="galleryText"><strong>Kawaii Ry</strong><br/> KILLMILORD Freestyle (Prod. Foreigner2x)</p>
                </div>    
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="galleryText"><strong>Josen</strong><br/> BITCH!YOU!A!DUB! (Prod. Snake)</p>
                </div> 
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="galleryText"><strong>Notamachine</strong><br/> Artificial</p>
                </div>                                         
            </div>  
            <h3>Art</h3>
            <div class="gallery_containerTwo">
                <div class="gallery_item">
                    <img src="https://pbs.twimg.com/media/FYHzDnmUIAAgKp7?format=jpg&name=large" width="100%"/><br/><p class="galleryText">By Cloudi Daze</p>
                </div>    
                <div class="gallery_item">
                    <img src="https://pbs.twimg.com/media/FYHzDnmUIAAgKp7?format=jpg&name=large" width="100%"/><br/><p class="galleryText">By Cloudi Daze</p>
                </div> 
                <div class="gallery_item">
                    <img src="https://pbs.twimg.com/media/FYHzDnmUIAAgKp7?format=jpg&name=large" width="100%"/><br/><p class="galleryText">By Cloudi Daze</p>
                </div>  
                <div class="gallery_item">
                    <img src="https://pbs.twimg.com/media/FYHzDnmUIAAgKp7?format=jpg&name=large" width="100%"/><br/><p class="galleryText">By Cloudi Daze</p>
                </div>                                        
            </div> 
        </div>

        <div class="cardContainerYellow">
            <h2>Current Sitemap</h2>
            <p>
                Home
            </p>
        </div>        

        <div class="cardContainerGreen">
            <h2>Potential Sitemap</h2>
            <div class="containedText">
                <div class="flexColumn">
                    <div class="containedText">
                        <p>
                            Home<br/>
                            Artists<br/>
                            Music<br/>
                            Artwork<br/>
                            NFTs<br/>               
                            Clothing<br/> 
                            Community<br/>
                            Archives<br/>
                            Contact<br/>
                        </p>
                    </div>
                    <div class="containedText">
                        <p>
                            ANJU Online!<br/>
                            Kawaii Ry<br/>
                            Meauxminy<br/>
                            Lugosi<br/>
                            Cloudi Daze<br/>
                            Josen<br/>
                            Notamachine<br/>                
                            Remy3D<br/>
                            Lavitz<br/>
                            Semaj<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     
    </div>

    <script src="index.js"></script>
    </>
  );
}

export default App;
