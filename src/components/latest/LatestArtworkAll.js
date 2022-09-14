import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { NavLink } from 'react-router-dom';

const LatestArtworkAll = () => {
    return (
      <>
        <div class="masonry-wrap">
            <Masonry columnsCount={2} gutter={"0.75em"}>
                <div>
                    <p class="gallery-tag">ANJU Online!</p>
                    <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"/>
                </div>
                <div>
                    <p class="gallery-tag">ANJU Online!</p>
                    <img src="https://pbs.twimg.com/media/FRnSLHeXwAMvnoZ?format=jpg&name=4096x4096"/>
                </div>
                <div>
                    <p class="gallery-tag">ANJU Online!</p>
                    <img src="https://pbs.twimg.com/media/FATYxC0WEAUb4r1?format=jpg&name=large"/>
                </div>
                <div>
                    <p class="gallery-tag">ANJU Online!</p>                        
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deonync-8e189aef-e371-45e5-bd50-033b6eba9122.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvbnluYy04ZTE4OWFlZi1lMzcxLTQ1ZTUtYmQ1MC0wMzNiNmViYTkxMjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xe4G1EgO1MO6F7ri6YNGjMDYumIcguQmeu1aM7fmPPc"/>                   
                </div>
                <div>
                    <p class="gallery-tag">ANJU Online!</p>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deorq4y-cd16c7fd-66ac-43b6-996a-468c8289b99d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvcnE0eS1jZDE2YzdmZC02NmFjLTQzYjYtOTk2YS00NjhjODI4OWI5OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GndpeiU8ZI1OUrAj8y3XaZeWNezseCozE0PIoGjt3IM"/>                  
                </div>
                <div>
                    <p class="gallery-tag">ANJU Online!</p>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deorpt1-a72d0361-b1b2-4533-954c-d4ffe385b912.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvcnB0MS1hNzJkMDM2MS1iMWIyLTQ1MzMtOTU0Yy1kNGZmZTM4NWI5MTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UlcHUb1ZfmpbhVLViu4AUHBccVZ4s10pHGn84xkQGwk"/>                  
                </div>
            </Masonry>
        </div>
        <p>
            <NavLink to={"/archive/artwork/all"}>
                All Art
            </NavLink>
        </p>
      </>
    );
  };
  export default LatestArtworkAll;