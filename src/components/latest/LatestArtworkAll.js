import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { NavLink } from 'react-router-dom';

const LatestArtworkAll = () => {
    return (
      <>
        <div class="masonry-wrap">
            <Masonry columnsCount={2} gutter={"0.75em"}>
            <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/2" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/OjvBiU7.jpeg"/>                  
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/1" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/ipEN0pq.jpeg"/>                  
                    </a> 
                </div>

                <div>
                    <a href="https://objkt.com/asset/KT1MAZH3oa2TUTMG4Bu7SGnMVhW2Ms2ePBgL/0" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/w5ZF20r.jpeg"/>                  
                    </a> 
                </div>

                <div>
                  <a href="https://foundation.app/@ANJUonline/anju/1" target="_blank" rel="noopener noreferrer">
                    <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"/>
                  </a>
                </div>

                <div>
                    <img src="https://pbs.twimg.com/media/FRnSLHeXwAMvnoZ?format=jpg&name=4096x4096"/>
                </div>

                <div>
                    <img src="https://pbs.twimg.com/media/FATYxC0WEAUb4r1?format=jpg&name=large"/>
                </div>

                <div>                   
                    <img src="https://i.imgur.com/FssODgS.jpeg"/>                   
                </div>

                <div>
                    <img src="https://i.imgur.com/IIO7yUN.jpeg"/>                  
                </div>

                <div>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deorpt1-a72d0361-b1b2-4533-954c-d4ffe385b912.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvcnB0MS1hNzJkMDM2MS1iMWIyLTQ1MzMtOTU0Yy1kNGZmZTM4NWI5MTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UlcHUb1ZfmpbhVLViu4AUHBccVZ4s10pHGn84xkQGwk"/>                  
                </div>

                <div>
                  <a href="https://versum.xyz/token/versum/6605" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.imgur.com/8X5hNZF.png"/>
                  </a>
                </div>
            </Masonry>
        </div>
        <div class="containedText">               
              <p><NavLink to={"/archive/artwork"}><i><strong>All Artwork</strong></i> →</NavLink></p>
        </div>
      </>
    );
  };
  export default LatestArtworkAll;