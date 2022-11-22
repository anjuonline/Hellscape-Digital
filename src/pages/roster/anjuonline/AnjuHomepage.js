import AnjuHomepageIndex from 'pages/roster/anjuonline/components/AnjuHomepageIndex';
import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';
import React from 'react'
import ReactPlayer from 'react-player'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const AnjuHomepage = () => {
    return (
      <div class="main-column">
        {/* <ArchiveIndex></ArchiveIndex>
        <div class="subindexFont">
            <p><br/>
            <NavLink to={"/updates"}>Updates</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
            <NavLink to={"/changelog"}>Site Changelog</NavLink><br/><br/></p>
        </div>   */}
          
        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2>ANJU Online!</h2>
          </div>

          <div class="containedImg">
            <img src="https://i.imgur.com/sO14OX6.jpg"></img>
          </div>
        
          <div>
            <p class="containedText">
              Creator of Hellscape Digital, <strong>ANJU Online!</strong> is a virtual girl making art, music & clothes alone in her room.
              <br/><br/>
              Through a nostalgic lens of mid-2000s web culture, Anju's work across multiple mediums explores concepts of social connectedness and how technology drives perception of others and oneself.
            </p>
          </div>

        </div> 

        <AnjuHomepageIndex></AnjuHomepageIndex>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="artwork">Artwork</h2>
          </div>

          <div>
            <p>
              <strong>Collections:</strong><br/><CrossSymbol/> <strong>ANJU Online!</strong> (Foundation) - <i>1/1 illustrations</i><br/><CrossSymbol/> <strong>ANJU Online!</strong> (Objkt) - <i>Multi-edition illustrations</i><br/><CrossSymbol/> <strong>Solid State Memories</strong> (Objkt) - <i>Razr photography</i><br/><CrossSymbol/> <strong>ANJUcore</strong> (Objkt) - <i>AI / Experimental</i><br/><br/>
            </p>
          </div>
        
          <div>
            <p class="containedText">
              <strong>ANJU Online! (Foundation Collection)</strong><br/>1/1 illustrations on the Ethereum blockchain:
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={2} gutter={"0.75em"}>

                <div>
                    <a href="https://foundation.app/@ANJUonline/anju/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"/>                  
                        <p class="gallery-text-left">
                          <strong>"CC Plz 💞"</strong><br/>0.2 ETH Reserve
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://foundation.app/@ANJUonline/anju/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000"/>                  
                        <p class="gallery-text-left">
                          <strong>"Product Placement"</strong><br/>0.06 ETH Reserve | 0.1 ETH Buy Now
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://foundation.app/@ANJUonline/foundation/130357" target="_blank" rel="noopener noreferrer">
                        <img src="https://pbs.twimg.com/media/FATYxC0WEAUb4r1?format=jpg&name=large"/>                  
                        <p class="gallery-text-left">
                          <strong>"ANJUwu!"</strong><br/>0.06 ETH Reserve | 0.1 ETH Buy Now
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/70588876071654358432271143971228343612714605604690375153303570603557963956225" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/EwEerWO.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>"Andromeda" (Opensea)</strong><br/><strike>0.1 ETH</strike> <i>Owned by <strong><a href="https://twitter.com/Gyvedd" target="_blank" rel="noopener noreferrer">Gyvedd</a></strong></i>
                        </p>
                    </a> 
                </div>

            </Masonry>
        </div>

          <div>
            <p class="containedText">
            <strong>ANJU Online! (Objkt Collection)</strong><br/>Multi-edition illustrations on the Tezos blockchain:
            </p>
          </div>

        </div>

      </div>
    );
  };
  export default AnjuHomepage;