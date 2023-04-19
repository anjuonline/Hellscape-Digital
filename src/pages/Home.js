import ReactPlayer from "react-player"
import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';
import LatestArtworkAll from 'components/latest/LatestArtworkAll';
import LatestMusicAll from 'components/latest/LatestMusicAll';
import LatestUpdates from 'components/latest/LatestUpdates';
import ArchiveIndex from 'components/archive/ArchiveIndex';

const Home = () => {
  return (
    <div class="main-column">
        <div class="card-container-rainbow">
            <div class="featured-card">
                <p>
                    Hellscape Digital is an artist collective and friend group; a creative multiverse driven by music, fashion, design, gaming, and avant-garde web culture.
                </p>
                <p>
                    This website is a constant work in progress—an evolving omnibus of Hellscape's full music & art catalog, new releases, clothing drops, and more.
                </p>
            </div>
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Spotlight</h2>
            </div> 

            <div class="react-player-responsive">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=Q0Ot5LS6GjU"
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <p><strong>Lugosi</strong><br/>PHOTO (prod. chris6lair)</p> 

            <div class="react-player-responsive">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=21VuClIGW4o"
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <p><strong>Hellscape Radio Vol. 5</strong><br/>Kawaii Ry @ CRACKFEST V (Full Set)</p>  

            <div class="react-player-responsive">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=s-1KhYY6rtw"
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <p><strong>Interview - Kawaii Ry</strong><br/>SHEF Radio Ep. 22 feat. Kawaii Ry (Full Episode)</p>  

        </div>       

        <LatestUpdates/>                 

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2><NavLink to={"/music"}>Latest Music</NavLink></h2>
            </div>
            <LatestMusicAll/>  
        </div> 

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2><NavLink to={"/archive"}>Archive</NavLink></h2>
            </div>
            <ArchiveIndex/> 
            <div class="subindexFont">
                <p><br/>
                <a href="https://www.youtube.com/@HELLSCAPEDIGITAL" target="_blank;" rel="noopener noreferrer">YouTube</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://soundcloud.com/hellscapedigital" target="_blank" rel="noopener noreferrer">Soundcloud</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://twitter.com/H3LLSC4P3" target="_blank;" rel="noopener noreferrer">Twitter</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://www.instagram.com/hellscapedigital/" target="_blank;" rel="noopener noreferrer">Instagram</a><br/><br/>
                </p>
                <p class="footerFont1">
                2019-2023 &copy; Hellscape Digital <br/><br/>Site developed by <a href="https://twitter.com/ANJUonIine" class="footerFont1">ANJU Online!</a>
                {/* <br/><br/>Donations (ETH): 0x1E0371E4d89652Bb94F314D44337E86e0b758c9d / hellscapedigital.eth */}
                </p>
            </div>  
            <div >
                
            </div> 
        </div> 

        {/* <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Releases - Artwork</h2>
            </div>  
            <LatestArtworkAll/>
        </div>      */}

        {/* <div class="card-container">
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
        </div>         */}

        {/* <div class="card-container">
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
        </div> */}

    </div>
  );
};
export default Home;