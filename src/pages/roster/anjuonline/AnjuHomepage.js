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
            <p class="containedTextLeft">
              <br/>Creator of Hellscape Digital, <strong>ANJU Online!</strong> is a virtual girl making art, music & clothes alone in her room.
              <br/><br/>
              Through a nostalgic lens of mid-2000s web culture, Anju's work across multiple mediums explores concepts of social connectedness and the way technology drives perception of others and oneself.
            </p>
          </div>

        </div> 

        <AnjuHomepageIndex></AnjuHomepageIndex>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="artwork">🎨 Artwork</h2>
          </div>

          <div>
            <p>
            <br/><i>Below are Anju's collections of selected works available for sale. <br/>See <a href="https://hellscapedigital.net/anjuonline/art/all"><u>Archive</u></a> for complete portfolio.</i><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <br/><strong>Collections:</strong><br/><CrossSymbol/> <strong>ANJU Online!</strong> (Foundation) - <i>1/1 illustrations</i><br/><CrossSymbol/> <strong>ANJU Online!</strong> (Objkt) - <i>Multi-edition illustrations</i><br/><CrossSymbol/> <strong>Solid State Memories</strong> (Objkt) - <i>Razr photography</i><br/><CrossSymbol/> <strong>ANJUcore</strong> (Objkt) - <i>AI / Experimental</i><br/><br/>
            </p>
          </div>
        
          <div>
            <p class="containedTextLeft">
              <strong>ANJU Online! (Foundation Collection)</strong><br/><span class="grayTextLeft">1/1 illustrations on the Ethereum blockchain.</span><br/>
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
             <u>View full collection on Foundation</u><br/><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <strong>ANJU Online! (Objkt Collection)</strong><br/><span class="grayTextLeft">Multi-edition illustrations on the Tezos blockchain.</span>
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/26" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmW4eR9cP5nPGxcNKpsaT73Sw98HZz8U9DEwg5eF2Uo1bT/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Summer in November</strong><br/>
                          <span class="grayTextLeft">
                            <strong>9/12</strong> Available<br/>
                            <strong>2 ꜩ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/25" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmYibnANxNLUCo1jR64whSR8XXmBPgZFZzFDaerTcEcFdv/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Friend Request</strong><br/>
                          <span class="grayTextLeft">
                            <strong>0/12</strong> Available
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/24" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmdQ6vopmoQTMBrttmyzMWSiXmG2ouxXPrUKzJBUTgF3ZB/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Fit Check</strong><br/>
                          <span class="grayTextLeft">
                            <strong>1/30</strong> Available<br/>
                            <strong>1 ꜩ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/23" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmeyYHJpRTgpnSUSpDdMvcvQPNz26kNSUHgqHzwAK8uQLA/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Almost Home</strong><br/>
                          <span class="grayTextLeft">
                            <strong>11/15</strong> Available<br/>
                            <strong>1 ꜩ</strong> (Primary)
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
                            <strong>1 ꜩ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/21" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmRttAk9BLjZkYataWyUCWDEQCPGUfHgshMZ8GjRYQZMKZ/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Fresh Air</strong><br/>
                          <span class="grayTextLeft">
                            <strong>4/15</strong> Available<br/>
                            <strong>0.8 ꜩ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/20" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmY1pv3XXpdgBuppYMPAyAXREemxwU1W7XV8e93EzCbYvo/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Sound Check</strong><br/>
                          <span class="grayTextLeft">
                            <strong>15/20</strong> Available<br/>
                            <strong>0.8 ꜩ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/18" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/Qme1K88Syt8JKENMz6cKrScdid5c1hdfothm8SjdiFr3cW/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Good... For Now.</strong><br/>
                          <span class="grayTextLeft">
                            <strong>1/20</strong> Available<br/>
                            <strong>0.8 ꜩ</strong> (Primary)
                          </span>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/17" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmW5sEVqCNECBqDLp8nB9RGcFbjMeEDmWVtiyB1iesWFvZ/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Procrastination</strong><br/>10/20 Available<br/>0.8 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/16" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmWQQdNbj2KMUFnmjgRqZuExw1Vx2aLgdK77hAE7MZx2Xt/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Logging In</strong><br/>9/20 Available<br/>0.8 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/15" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmPmVVRQCJZDPmdrjCqsFpnXjAAXNkksesih5bYnijuBNi/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Security</strong><br/>11/20 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/14" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/wDxXKAh.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>4AM Anxiety Bath</strong><br/>6/20 Available<br/>0.8 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/13" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/Qmc8yeq3hHmr8UmDfAkXCMG16DkamxxhNQRifrW5MMKH5N/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>We Need To Talk</strong><br/>9/20 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/12" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmR18Qf2Q3MbKGy3st7iKHSszpgG9s4cgK1mLmedFLAxzx/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Do Not Disturb</strong><br/>9/19 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/11" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmV5jXBM3Xvp3SepEymyUia8ikGcmYem8xxj6Jd84yjqa5/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Coffee Break</strong><br/>7/15 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/11" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/jDzjkr7.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>Missed Calls</strong><br/>6/13 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/9" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmYd7MA2ibBaKJ3xDMP4GPJoCFFim9RUhmQMedVo3YZS8A/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>No Hands</strong><br/>15/19 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/8" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmZWBxXmdRAWk3cqSninKFAtbWERR5QszUbguPfsNnVuvo/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Bedford Station</strong><br/>3/9 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/7" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmYDS7H4j1Ta3539EE1CBDZuQD7mujmrFHPchutrWFy9rM/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>No Service</strong><br/>12/14 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/6" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmXrBVFdxhF7aRvcC4ffcgU77kf6bKbxnvv6TZEriDjYYH/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>?</strong><br/>10/16 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/5" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/eCB2G2q.jpeg"/>                  
                        <p class="gallery-text-left">
                          <strong>The World Is Yours</strong><br/>6/11 Available<br/>0.8 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/4" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmYz6Bi4yAjKeQiLb8v5wGfLsjFP3Wm58EcBGEGWSWvKRH/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Concept Art 2</strong><br/>18/20 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/3" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmbvwqoWXtGLxGZ9AW5NvVro1qADtB2DR3ZnDyw3rGKm41/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Concept Art 1</strong><br/>18/20 Available<br/>0.69 ꜩ (Primary)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DesRScqioLdizyRvsGyc9rkxh5qwtUcrZ/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmPdoHBVs2QsYukPdmgXpifVyCWnooiRNYb2DuCagUfsAP/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>Open For Business</strong><br/><span class="grayTextLeft">0/1 Available</span>
                        </p>
                    </a> 
                </div>

            </Masonry>
        </div>

        <div>
            <p class="containedText">
             <u>View full collection on Objkt</u><br/><br/>
            </p>
          </div>

          <div>
            <p class="containedTextLeft">
            <strong>Solid State Memories (Objkt Collection)</strong><br/>1/1 photography captured on a Motorola Razr V3M:
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/9" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmXr9cs8GJu7wg2oe7KkFe45j6q3DusUAw1Qz9hgafbShC/artifact"/>                  
                        <p class="gallery-text-left">
                          1/1 Available (Primary)<br/>1 ꜩ
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/8" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmP4xaSGcgALmZa4mFF2tHHM5QpbARLseLbUYVHRhv8vfh/artifact"/>                  
                        <p class="gallery-text-left">
                          1/1 Available (Primary)<br/>1 ꜩ
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/7" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmdiWAdAEErtvjRRe7XhqAk7ubREhRXv6etvDmLtpHe5qW/artifact"/>                  
                        <p class="gallery-text-left">
                          <span class="grayTextLeft">0/1 Available</span><br/><i>Owned by <strong><a href="https://twitter.com/EyeAmPeriod" target="_blank" rel="noopener noreferrer"></a>EyeAm.</strong></i>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/6" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmU1wrk6QGU3hHUNfWkhwCEsjWJ19RWSwzJyDpzpXKTs9h/artifact"/>                  
                        <p class="gallery-text-left">
                          1/1 Available (Secondary)<br/>50 ꜩ<br/><i>Owned by <strong><a href="https://twitter.com/EyeAmPeriod" target="_blank" rel="noopener noreferrer"></a>EyeAm.</strong></i>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1DRrBU2FaowRrrkDwcPSsGU392TWRzZqpo/5" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmU8vVy9EdDaR4LZ1JV2BHPwFoQrJm6MkJw1xC4c5TuBSW/artifact"/>                  
                        <p class="gallery-text-left">
                          1/1 Available (Primary)<br/>1 ꜩ
                        </p>
                    </a> 
                </div>

            </Masonry>
        </div>          

          <div>
            <p class="containedTextLeft">
            <strong>ANJUcore (Objkt Collection)</strong><br/>A mixed media collection exploring the aesthetics and creative direction of the ANJU Online! universe:
            </p>
          </div>

          <div class="masonry-wrap">
            <Masonry columnsCount={3} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/Qmbux6c83d4fyEH3vas67WNqQkw7ymjPGjgsZ3qhn8NQaa/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>𝘨𝘭𝘢𝘴𝘴_𝘫𝘢𝘳.𝘫𝘱𝘨</strong><br/>2/4 Available (Primary)<br/>0.75 ꜩ
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://assets.objkt.media/file/assets-003/QmXcnJNGnUp99sGGCcWrzi7X9JvPcJotoTdLe1jBqQnWAy/artifact"/>                  
                        <p class="gallery-text-left">
                          <strong>𝘨𝘰𝘰𝘥_𝘭𝘶𝘤𝘬_𝘤𝘩𝘢𝘳𝘮.𝘫𝘱𝘨</strong><br/>5/5 Available (Primary)<br/>0.8 ꜩ
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://ipfs.io/ipfs/QmUszpgEKexoL46MRG68zjj6TUPyK5bxQa55e3Yt3xdAom"/>                  
                        <p class="gallery-text-left">
                          <strong>𝘤𝘭𝘶𝘣_𝘬𝘢𝘸𝘢𝘪𝘪.𝘫𝘱𝘨</strong><br/>3/5 Available (Primary)<br/>1 ꜩ
                        </p>
                    </a> 
                </div>

            </Masonry>
          </div>

          <div>
            <p class="containedText">
             <span class="grayTextLeft"><i>Items: 3 | Total Volume: 2.5 ꜩ | Floor: 0.75 ꜩ</i></span><br/><u>View on Objkt.com</u><br/><br/>
            </p>
          </div>

        </div>

      </div>
    );
  };
  export default AnjuHomepage;