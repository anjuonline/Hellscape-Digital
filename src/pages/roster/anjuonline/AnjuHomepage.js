import AnjuHomepageIndex from 'pages/roster/anjuonline/components/AnjuHomepageIndex';
import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';
import React from 'react'
import ReactPlayer from 'react-player'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import AnjuAllReleasesStatic from 'components/archive/artist/anjuonline/music/AnjuAllReleasesStatic';
import AnjuMusicYearSubindex from 'components/archive/artist/anjuonline/music/year/AnjuMusicYearSubindex';

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
            <img src="https://i.imgur.com/xXfmz1h.jpeg"></img>
          </div>
        
          <div>
            <p class="containedTextLeft">
              <br/>Creator of Hellscape Digital, <strong>ANJU Online!</strong> is a virtual girl making art, music and clothing.
              <br/><br/>
              Through a nostalgic lens of mid-2000s web culture, Anju's work across multiple mediums explores concepts of social connectedness and the way technology drives perception of others and oneself.
            </p>
            <div id="index"></div>
          </div>

        </div> 

        

        <AnjuHomepageIndex></AnjuHomepageIndex>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="artwork">ANJU Online! - Artwork 🎨 <a href="#index"><span class="backToTop"><i>(Back to Index)</i></span></a></h2>
          </div>

          <div>
            <p class="containedText">
              <span class="grayText">
            <br/><i>Below are Anju's collections of selected works available for sale. <br/>See <a href="https://hellscapedigital.net/anjuonline/art/all"><u>Archive</u></a> for complete portfolio.</i></span><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <br/><strong>Collections:</strong><br/><CrossSymbol/> <strong>ANJU Online!</strong> (Foundation) - <i>1/1 illustrations</i><br/><CrossSymbol/> <strong>ANJU Online!</strong> (Objkt) - <i>Multi-edition illustrations</i><br/><CrossSymbol/> <strong>Solid State Memories</strong> (Objkt) - <i>Razr photography</i><br/><CrossSymbol/> <strong>ANJUcore</strong> (Objkt) - <i>AI / Experimental</i><br/><br/>
            </p>
          </div>
        
          <div>
            <p class="containedTextLeft">
              <strong><a href="https://foundation.app/@ANJUonline" target="blank;" rel="noopener noreferrer">ANJU Online! (Foundation)</a></strong><br/><span class="grayTextLeft">1/1 illustrations on the Ethereum blockchain</span><br/>
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={2} gutter={"0.75em"}>

                <div>
                    <a href="https://foundation.app/@ANJUonline/anju/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"/>                  
                        <p class="gallery-text-left">
                          <strong>CC Plz 💞</strong><br/>
                          <span class="grayTextLeft"><strong>0.2 ETH</strong> Reserve</span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://foundation.app/@ANJUonline/anju/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000"/>                  
                        <p class="gallery-text-left">
                          <strong>Product Placement</strong><br/>
                          <span class="grayTextLeft"><strong>0.06 ETH</strong> Reserve | <strong>0.1 ETH</strong> Buy Now</span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://foundation.app/@ANJUonline/foundation/130357" target="_blank" rel="noopener noreferrer">
                        <img src="https://pbs.twimg.com/media/FATYxC0WEAUb4r1?format=jpg&name=large"/>                  
                        <p class="gallery-text-left">
                          <strong>ANJUwu!</strong><br/>
                          <span class="grayTextLeft"><strong>0.06 ETH</strong> Reserve | <strong>0.1 ETH</strong> Buy Now</span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/70588876071654358432271143971228343612714605604690375153303570603557963956225" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/EwEerWO.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Andromeda (Opensea)</strong><br/>
                          <span class="grayTextLeft"><strike><strong>0.1 ETH</strong></strike> <i>Owned by <strong><a href="https://twitter.com/Gyvedd" target="_blank" rel="noopener noreferrer">Gyvedd</a></strong></i></span>
                        </p>
                    </a> 
                </div>

            </Masonry>
        </div>

        <div>
            <p class="containedText">
            <span class="grayText"><u><i><a href="https://foundation.app/@ANJUonline" target="_blank" rel="noopener noreferrer" class="grayText">View full collection on Foundation</a></i></u></span><br/><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <strong><a href="https://objkt.com/collection/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ" target="_blank" rel="noopener noreferrer">ANJU Online! (Objkt.com)</a></strong><br/><span class="grayTextLeft">Multi-edition illustrations on the Tezos blockchain</span>
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/26" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/Z9JVWbo.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Summer in November</strong><br/>
                          <span class="grayTextLeft">
                            <strong>9/12</strong> Available<br/>
                            <strong>2 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/25" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/7IDSjbZ.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Friend Request</strong><br/>
                          <span class="grayTextLeft">
                            <strong>1/12</strong> Available<br/>
                            <strong>20 XTZ</strong> (Secondary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/24" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/IIO7yUN.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Fit Check</strong><br/>
                          <span class="grayTextLeft">
                            <strong>1/30</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/23" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/TpKsXp6.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Almost Home</strong><br/>
                          <span class="grayTextLeft">
                            <strong>11/15</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/22" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/FssODgS.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>ANJU is Now Online!</strong><br/>
                          <span class="grayTextLeft">
                            <strong>13/20</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/21" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/1cjm1lq.png"/>                  
                        <p class="gallery-text-left">
                          <strong>Fresh Air</strong><br/>
                          <span class="grayTextLeft">
                            <strong>4/15</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/20" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/yxPX7Wt.png"/>                  
                        <p class="gallery-text-left">
                          <strong>Sound Check</strong><br/>
                          <span class="grayTextLeft">
                            <strong>15/20</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/18" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/cRqH6Vf.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Good... For Now.</strong><br/>
                          <span class="grayTextLeft">
                            <strong>1/20</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/17" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/X3KC0hL.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Procrastination</strong><br/>
                          <span class="grayTextLeft">
                            <strong>10/20</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/16" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/dbFW6b8.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Logging In</strong><br/>
                          <span class="grayTextLeft">
                            <strong>9/20</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/15" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/GlRLjhN.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Security</strong><br/>
                          <span class="grayTextLeft">
                            <strong>11/20</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/14" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/wDxXKAh.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>4AM Anxiety Bath</strong><br/>
                          <span class="grayTextLeft">
                            <strong>6/20</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/13" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/xXfmz1h.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>We Need To Talk</strong><br/>
                          <span class="grayTextLeft">
                            <strong>9/20</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/12" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/OxApZUB.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Do Not Disturb</strong><br/>
                          <span class="grayTextLeft">
                            <strong>9/19</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/11" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/7tL0IEb.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Coffee Break</strong><br/>
                          <span class="grayTextLeft">
                            <strong>6/15</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/11" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/jDzjkr7.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Missed Calls</strong><br/>
                          <span class="grayTextLeft">
                            <strong>6/13</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/9" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/DWQNOGD.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>No Hands</strong><br/>
                          <span class="grayTextLeft">
                            <strong>15/19</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/8" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/EyXf2ZE.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Bedford Station</strong><br/>
                          <span class="grayTextLeft">
                            <strong>3/9</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/7" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/VrlMT9g.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>No Service</strong><br/>
                          <span class="grayTextLeft">
                            <strong>12/14</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/6" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/e5HqlMh.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>?</strong><br/>
                          <span class="grayTextLeft">
                            <strong>10/16</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/5" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/eCB2G2q.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>The World Is Yours</strong><br/>
                          <span class="grayTextLeft">
                            <strong>6/11</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/4" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/pGrmlDk.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>Concept Art 2</strong><br/>
                          <span class="grayTextLeft">
                            <strong>18/20</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/3" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/EALW4vv.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>Concept Art 1</strong><br/>
                          <span class="grayTextLeft">
                            <strong>18/20</strong> Available<br/>
                            <strong>0.69 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/X3tCScn.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>Open For Business</strong><br/>
                          <span class="grayTextLeft">
                            <strike><strong>0/1</strong> Available</strike><br/>
                            Sold Out
                          </span>
                        </p>
                    </a> 
                </div>

            </Masonry>
        </div>

        <div>
            <p class="containedText">
             <u><a href="https://objkt.com/collection/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ" target="_blank" rel="noopener noreferrer" class="grayText"><i>View full collection on Objkt.com</i></a></u><br/><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <strong><a href="https://objkt.com/collection/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo" target="_blank;" rel="noopener noreferrer">Solid State Memories (Objkt.com)</a></strong><br/><span class="grayTextLeft">1/1 photography captured on a Motorola Razr V3M</span>
            </p>
          </div>

          {/* <div class="containedImg">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="https://i.imgur.com/SMCBKdQ.jpg"></img>
              <p class="gallery-text-left">
                <span class="grayTextLeft">
                  <strike><strong>0/1</strong> Available<br/></strike>
                  <i>Owned by <a href="https://twitter.com/ry2kawaii" target="_blank" rel="noopener noreferrer"><strong>Kawaii Ry</strong></a></i>
                </span>
              </p> 
            </a>
          </div> */}

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/9" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/1Nj7cIP.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/8" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/uMGum0K.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/7" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/pYxYmnU.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strike><strong>0/1</strong> Available</strike><br/>
                            <i>Owned by <a href="https://twitter.com/EyeAmPeriod" target="_blank" rel="noopener noreferrer"><strong>EyeAm.</strong></a></i>
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/6" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/4MAfaZc.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>50 XTZ</strong> (Secondary)<br/>
                            <i>Owned by <a href="https://twitter.com/EyeAmPeriod" target="_blank" rel="noopener noreferrer"><strong>EyeAm.</strong></a></i>
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/5" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/ajkfAwX.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/4" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/1czvNkJ.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>3 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/3" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/yeicEjf.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>2 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/VyV5dmj.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>2 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/p9aEcEb.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strong>1/1</strong> Available<br/>
                            <strong>3 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/SMCBKdQ.jpg"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">
                            <strike><strong>0/1</strong> Available</strike><br/>
                            <i>Owned by <a href="https://twitter.com/ry2kawaii" target="_blank" rel="noopener noreferrer"><strong>Kawaii Ry</strong></a></i>
                          </span>
                        </p>
                    </a> 
                </div>

            </Masonry>
        </div>          

          <div>
            <p class="containedText">
             <u><a href="https://objkt.com/collection/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo" target="_blank" rel="noopener noreferrer" class="grayText"><i>View full collection on Objkt.com</i></a></u><br/><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <strong><a href="https://objkt.com/collection/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL" target="_blank" rel="noopener noreferrer">ANJUcore (Objkt.com)</a></strong><br/>
              <span class="grayTextLeft">
                A mixed media collection exploring the aesthetics and creative direction of the <strong>ANJU Online!</strong> universe
              </span>
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/t12GAYt.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>𝘨𝘭𝘢𝘴𝘴_𝘫𝘢𝘳.𝘫𝘱𝘨</strong><br/>
                          <span class="grayTextLeft">
                            <strong>2/4</strong> Available<br/>
                            <strong>0.75 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/lDe1wEX.jpg"/>                  
                        <p class="gallery-text-left">
                          <strong>𝘨𝘰𝘰𝘥_𝘭𝘶𝘤𝘬_𝘤𝘩𝘢𝘳𝘮.𝘫𝘱𝘨</strong><br/>
                          <span class="grayTextLeft">
                            <strong>5/5</strong> Available<br/>
                            <strong>0.8 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://ipfs.io/ipfs/QmUszpgEKexoL46MRG68zjj6TUPyK5bxQa55e3Yt3xdAom"/>                  
                        <p class="gallery-text-left">
                          <strong>𝘤𝘭𝘶𝘣_𝘬𝘢𝘸𝘢𝘪𝘪.𝘫𝘱𝘨</strong><br/>
                          <span class="grayTextLeft">
                            <strong>3/5</strong> Available<br/>
                            <strong>1 XTZ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

            </Masonry>
          </div>

          <div>
            <p class="containedText">
             <u><a href="https://objkt.com/collection/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL" target="_blank" rel="noopener noreferrer" class="grayText"><i>View full collection on Objkt.com</i></a></u><br/><br/>
            </p>
          </div>

        </div>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="music">ANJU Online! - Music 🎸 <a href="#index"><span class="backToTop"><i>(Back to Index)</i></span></a></h2>
          </div>

          <div>
            <p class="containedText">
              <br/><a href="https://open.spotify.com/artist/37ttXQurF9FaNHsmWS0Rp0?si=97e7c055fed640ba"><strong>Spotify</strong></a> <CrossSymbol/> <a href="https://soundcloud.com/anjuonline"><strong>Soundcloud</strong></a>  <CrossSymbol/>  <a href="https://www.youtube.com/@anju"><strong>YouTube</strong></a> <CrossSymbol/> <a href="https://hellscapedigital.net/anjuonline/music/all"><strong>Archive</strong></a><br/>
            </p>
          </div>

          <div class="react-player-responsive-playlist">
                <ReactPlayer
                    url="https://soundcloud.com/anjuonline/sets/discography"
                    width={"100%"}
                    height={"100%"}
                />

          </div>

          <div>
            <p class="containedText">
              <span class="grayText">
            <br/><i>For a more organized view of the <strong>ANJU Online!</strong> discography, see <a href="https://hellscapedigital.net/anjuonline/music/all"><u>Archive</u></a>.</i></span><br/>
            </p>
          </div>

          {/* <AnjuMusicYearSubindex/>
          <AnjuAllReleasesStatic/> */}

        </div>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="clothing">ANJU Online! - Clothing 🧵 <a href="#index"><span class="backToTop"><i>(Back to Index)</i></span></a></h2>
          </div>

          <div class="containedImg">
            <img src="https://i.imgur.com/fOmCwax.jpg"></img>
          </div>

          <div>
            <p class="containedText">
              <br/><strong>Anju Supply Co.</strong><br/>
              <span class="grayText">Sustainable, upcycled apparel and embroidery work.<br/>Every piece is 1/1, uniquely sourced and handmade by Anju.</span>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
              <br/>
              <span class="grayText"><strong><i>In Stock</i></strong></span>
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                  <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-black-metal-beanie?variant=44089147785527" target="blank;" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/DtoC6RH.png"/>                  
                        <p class="gallery-text">
                          <strong>Black Metal Beanie (Rainbow)</strong><br/>
                          <span class="grayText">
                          <strong>$25.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                        </a>
                </div>

                <div>
                  <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-black-metal-beanie?variant=44089147818295" target="blank;" rel="noopener noreferrer">
                        <img src="https://cdn.shopify.com/s/files/1/0684/5179/5255/products/ASC20009.png?v=1669495965&width=990"/>                  
                        <p class="gallery-text">
                          <strong>Black Metal Beanie (Red)</strong><br/>
                          <span class="grayText">
                          <strong>$25.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                        </a>
                </div>

                <div>
                  <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-black-metal-beanie?variant=44089147851063" target="blank;" rel="noopener noreferrer">
                        <img src="https://cdn.shopify.com/s/files/1/0684/5179/5255/products/ASC20006.png?v=1669496003&width=990"/>                  
                        <p class="gallery-text">
                          <strong>Black Metal Beanie (Green)</strong><br/>
                          <span class="grayText">
                          <strong>$25.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                        </a>
                </div>

                <div>
                  <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-1-1-thrifted-crewneck-m" target="blank;" rel="noopener noreferrer">
                        <img src="https://cdn.shopify.com/s/files/1/0684/5179/5255/products/88197190_2916060388473346_8206259564186731949_n.jpg?v=1669508476&width=990"/>                  
                        <p class="gallery-text">
                          <strong>1/1 Thrifted Crewneck (M)</strong><br/>
                          <span class="grayText">
                          <strong>$50.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                        </a>
                </div>

                <div>
                  <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-thrifted-gap-fleece-m" target="blank;" rel="noopener noreferrer">
                        <img src="https://cdn.shopify.com/s/files/1/0684/5179/5255/products/ASC19008.jpg?v=1669491745&width=990"/>                  
                        <p class="gallery-text">
                          <strong>1/1 Thrifted Gap Fleece (M)</strong><br/>
                          <span class="grayText">
                          <strong>$40.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                        </a>
                </div>

                <div>
                  <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-1-1-thrifted-womens-tee-s" target="blank;" rel="noopener noreferrer">
                        <img src="https://cdn.shopify.com/s/files/1/0684/5179/5255/products/ASC19013.jpg?v=1669494356&width=990"/>                  
                        <p class="gallery-text">
                          <strong>1/1 Thrifted Women's Tee (L)</strong><br/>
                          <span class="grayText">
                          <strong>$25.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                        </a>
                </div>

                <div>
                    <a href="https://hellscapedigital.myshopify.com/products/do-not-disturb-vinyl-sticker" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.shopify.com/s/files/1/0684/5179/5255/products/ASC18001.png?v=1669419724&width=990"/>                  
                        <p class="gallery-text">
                          <strong>Do Not Disturb (Vinyl Sticker)</strong><br/>
                          <span class="grayText">
                            <strong>$3.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://hellscapedigital.myshopify.com/products/anju-supply-co-pixel-anju-vinyl-sticker" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/8EeEMQn.png"/>                  
                        <p class="gallery-text">
                          <strong>Pixel Anju (Vinyl Sticker)</strong><br/>
                          <span class="grayText">
                            <strong>$3.00</strong> (In Stock)<br/>
                          </span>
                        </p>
                    </a> 
                </div>

            </Masonry>
          </div>

          <div>
            <p class="containedTextLeft">
              <br/><br/>
              <span class="grayText"><i><strong>Archive</strong> (Past Items)</i></span>
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                        <img src="https://i.imgur.com/JpGP1Mf.png"/>                  
                        <p class="gallery-text">
                          <strong>Dollface Darkness Cropped Long Sleeve</strong><br/>
                          <span class="grayText">
                          <i>SKU: ASC20012</i><br/>
                          </span>
                        </p>
                </div>

                <div>
                        <img src="https://i.imgur.com/DtoC6RH.png"/>                  
                        <p class="gallery-text">
                          <strong>Black Metal Beanie (RYGB on Black)</strong><br/>
                          <span class="grayText">
                          <i>SKU: ASC20011</i><br/>
                          </span>
                        </p>
                </div>

                <div>
                        <img src="https://i.imgur.com/iTRUetn.png"/>                  
                        <p class="gallery-text">
                          <strong>Custom Fila for Meauxminy</strong><br/>
                          <span class="grayText">
                          <i>SKU: ASC20010</i><br/>
                          </span>
                        </p>
                </div>

                <div>
                        <img src="https://i.imgur.com/XG7TWFQ.png"/>                  
                        <p class="gallery-text">
                          <strong>Black Metal Tee</strong><br/>
                          <span class="grayText">
                          Anju Supply Co.'s first release; Summer 2018.<br/>
                          <i>SKU: ASC18002</i><br/>
                          </span>
                        </p>
                </div>

            </Masonry>
          </div>

          <div class="containedImg">
            <img src="https://i.imgur.com/jAtfSk2.jpg"></img>
          </div>

          {/* <div class="containedImg">
            <img src="https://i.imgur.com/k91wLgz.gif" class="halfWidth"></img>
          </div> */}

          {/* <AnjuMusicYearSubindex/>
          <AnjuAllReleasesStatic/> */}

        </div>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="music">ANJU Online! - Socials 💌 <a href="#socials"><span class="backToTop"><i>(Back to Index)</i></span></a></h2>
          </div>

          <div>
            <p class="containedText">
              <br/><a href="https://open.spotify.com/artist/37ttXQurF9FaNHsmWS0Rp0?si=97e7c055fed640ba"><strong>Twitter</strong></a> <CrossSymbol/> <a href="https://soundcloud.com/anjuonline"><strong>Instagram</strong></a>  <CrossSymbol/>  <a href="https://www.youtube.com/@anju"><strong>YouTube</strong></a> <CrossSymbol/> <a href="https://hellscapedigital.net/anjuonline/music/all"><strong>Tumblr</strong></a><br/>
            </p>
          </div>

        </div>

      </div>
    );
  };
  export default AnjuHomepage;