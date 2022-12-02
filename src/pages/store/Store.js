import AnjuHomepageIndex from 'pages/roster/anjuonline/components/AnjuHomepageIndex';
import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';
import React from 'react'
import ReactPlayer from 'react-player'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import AnjuAllReleasesStatic from 'components/archive/artist/anjuonline/music/AnjuAllReleasesStatic';
import AnjuMusicYearSubindex from 'components/archive/artist/anjuonline/music/year/AnjuMusicYearSubindex';
import StoreSubindex from 'pages/store/components/StoreSubindex'

const Store = () => {
    return (
      <div class="main-column">
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Hellscape Digital - Store</h2>
            </div>            
            <StoreSubindex/>
        </div> 

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="hellscape">Hellscape Digital
             {/* <a href="#index"><span class="backToTop"><i>(Back to Index)</i></span></a> */}
            </h2>
          </div>

          <div>
            <p class="containedText">
              <span class="grayText">
            <br/><i>Hellscape Digital store opening 2023.</i></span><br/>
            </p>
          </div>

        </div>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2 id="music">Anju Supply Co. 
                {/* <a href="#index"><span class="backToTop"><i>(Back to Index)</i></span></a> */}
            </h2>
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

        </div>

      </div>
    );
  };
  export default Store;