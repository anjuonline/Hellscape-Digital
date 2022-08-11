import ReactPlayer from "react-player"
import LatestArtworkAll from 'components/homepage/LatestArtworkAll';
import LatestMusicAll from 'components/homepage/LatestMusicAll';

const Home = () => {
  return (
    <div class="main-column">
        <div class="card-container-rainbow">
            <div class="featured-card">
                <p>
                    Hellscape Digital is an artist collective and friend group; a creative multiverse driven by music, fashion, design, gaming, and avant-garde web culture.
                </p>
                <p>
                    This website is a constant work in progress—an evolving omnibus of Hellscape's full music & art catalog, new releases, upcoming events, and documentation of our work as artists.
                </p>
            </div>
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Updates</h2>
            </div>            
            <div class="containedText">
            <h3>
                July 18, 2022
            </h3> 
            <p>
                Welcome to the new Hellscape Digital site! Take a look around and explore the pages, but keep in mind that pretty much nothing works yet. More updates to follow.
            </p>                   
            </div>
        </div> 

        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Spotlight</h2>
            </div>            
            <div class="react-player-responsive">
                <ReactPlayer
                    url="https://soundcloud.com/liljosen/done-died-w-jackie-platinum"
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <p><strong>Josen</strong> - DONE!DIED! Feat. Jackie Platinum<br/>(Prod. Notamachine + Antar + OBMUS1C)</p>            
        </div>                

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Releases / Music</h2>
            </div>
            <LatestMusicAll/>  
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Releases / Artwork</h2>
            </div>  
            <LatestArtworkAll/>
        </div>               

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Current Sitemap</h2>
            </div>
            <div class="containedText">
                <div class="flexColumn">
                    <div class="flex-column-contained-text">
                        <p>
                            <strong>Home</strong><br/>
                        </p>
                        <p>
                            <strong>Archive</strong><br/>
                        </p>
                    </div>
                    <div class="flex-column-contained-text">
                        <p>
                            Archive<br/>
                        </p>
                    </div>
                </div>  
            </div>        
        </div>        

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Potential Sitemap</h2>
            </div>
            <div class="containedText">
                <div class="flexColumn">
                    <div class="flex-column-contained-text">
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
                    <div class="flex-column-contained-text">
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
  );
};
export default Home;