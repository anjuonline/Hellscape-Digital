import ReactPlayer from "react-player"
import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';
import LatestArtworkAll from 'components/latest/LatestArtworkAll';
import LatestMusicAll from 'components/latest/LatestMusicAll';
import LatestUpdates from 'components/latest/LatestUpdates';
import ArchiveIndex from 'components/archive/ArchiveIndex';

const Community = () => {
  return (
    <div class="main-column">

        <div class="logo">
          <NavLink to={"/"}><img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/></NavLink>
        </div>
        {/* <div class="card-container-rainbow">
            <div class="featured-card">
                <p>
                    Hellscape Digital is an artist collective and friend group; a creative multiverse driven by music, fashion, design, gaming, and avant-garde web culture.
                </p>
                <p>
                    This website is a constant work in progress—an evolving omnibus of Hellscape's full music & art catalog, new releases, clothing drops, and more.
                </p>
            </div>
        </div> */}

        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Chat</h2>
            </div>  
            <div class="chat-main-column-community">
        <iframe
          src="https://xat.com/embed/chat.php#id=220522559&gn=HellscapeDigital"
          className="chat-iframe-container-community"
          title="Chat"
          seamless="seamless"
        ></iframe>
      </div>
        </div>                      

        <div class="community-icons-wrapper">
                <div class="community-icons">
                <br></br><a href="https://discord.gg/Dg4a3pQrg6" target="_blank;" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/gY4V6S5.png"/>
                    </a>
                </div>
            </div>
            <p>Click here to join the Hellscape discord!</p><br></br><br></br><br></br>

        <div class="subindexFont">
                <p class="footerFont1"><br/>
                <a href="https://www.youtube.com/@HELLSCAPEDIGITAL" target="_blank;" rel="noopener noreferrer">YouTube</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://soundcloud.com/hellscapedigital" target="_blank" rel="noopener noreferrer">Soundcloud</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://twitter.com/H3LLSC4P3" target="_blank;" rel="noopener noreferrer">Twitter</a>&nbsp;&nbsp;<CrossSymbol/>&nbsp;&nbsp;<a href="https://www.instagram.com/hellscapedigital/" target="_blank;" rel="noopener noreferrer">Instagram</a><br/><br/>
                </p>
                <p class="footerFont1">
                2019-2024 &copy; Hellscape Digital <br/><br/>Site developed by <a href="https://twitter.com/ANJUonIine" class="footerFont1">ANJU Online!</a>
                {/* <br/><br/>Donations (ETH): 0x1E0371E4d89652Bb94F314D44337E86e0b758c9d / hellscapedigital.eth */}
                </p>
            </div>  


    </div>
  );
};
export default Community;