import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const AnjuMixedMediaStatic = () => {
    return (
      <>
        <div class="masonry-wrap">
            <Masonry columnsCount={1} gutter={"0.75em"}>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/OjvBiU7.jpeg"/>                  
                        <p class="gallery-text">
                            <strong>"glass_jar.jpg"</strong> <i>(DALL-E 2 + Photoshop)</i><br/>
                            3/4 editions available on Objkt - 0.8 XTZ
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/ipEN0pq.jpeg"/>                  
                        <p class="gallery-text">
                            <strong>"good_luck_charm.jpg"</strong> <i>(DALL-E 2 + Photoshop)</i><br/>
                            5/5 editions available on Objkt - 0.8 XTZ
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/w5ZF20r.jpeg"/>                  
                        <p class="gallery-text">
                            <strong>"club_kawaii.jpg"</strong> <i>(Photography + Photoshop)</i><br/>
                            4/5 editions available on Objkt - 1 XTZ
                        </p>
                    </a> 
                </div>

                <div>
                        <img src="https://i.imgur.com/dCoa9Za.jpeg"/>                  
                        <p class="gallery-text">
                            Cover art for <strong>ANJU Online! - Ringt0ne4MyBurner.mp3</strong> <i>(Photography)</i><br/>
                        </p>
                </div>

            </Masonry>
        </div>      
      </>
    );
  };
  export default AnjuMixedMediaStatic;