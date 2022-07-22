import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Artwork = () => {
  return (
    <>
    <div class="main-column">

        <div class="card-container">
            <div class="title-wrap-rainbow">
                    <h2>Hellscape Digital / Artwork</h2>
            </div>            
            <div class="containedText">
                <h3>
                    By Artist
                </h3>                
            </div>
            <div class="flexColumn">
                <div class="containedText">
                    <a href="#anju">
                        <p>
                            ANJU Online!<br/>
                        </p>
                    </a>
                </div>
                <div class="containedText">
                    <a href="#cloudi">
                        <p>
                            Cloudi Daze<br/>
                        </p>
                    </a>    
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2 id="anju">Artwork / ANJU Online!</h2>
            </div> 
            <div class="masonry-wrap">
                <Masonry columnsCount={2} gutter={"0.75em"}>
                    <div>
                        <img src="https://f8n-production-collection-assets.imgix.net/0x1f597E08f4e7428845EB693d9F49B33f07eF04eD/1/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"/>
                        <p class="masonry-text">
                            CC Plz
                        </p>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/media/FRnSLHeXwAMvnoZ?format=jpg&name=4096x4096"/>
                        <p class="masonry-text">
                            Self Care Night
                        </p>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/media/FATYxC0WEAUb4r1?format=jpg&name=large"/>
                        <p class="masonry-text">
                            Self Care Night
                        </p>
                    </div>
                    <div>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deonync-8e189aef-e371-45e5-bd50-033b6eba9122.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvbnluYy04ZTE4OWFlZi1lMzcxLTQ1ZTUtYmQ1MC0wMzNiNmViYTkxMjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xe4G1EgO1MO6F7ri6YNGjMDYumIcguQmeu1aM7fmPPc"/>
                        <p class="masonry-text">
                            ANJU is Now Online!
                        </p>                    
                    </div>
                    <div>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deorq4y-cd16c7fd-66ac-43b6-996a-468c8289b99d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvcnE0eS1jZDE2YzdmZC02NmFjLTQzYjYtOTk2YS00NjhjODI4OWI5OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GndpeiU8ZI1OUrAj8y3XaZeWNezseCozE0PIoGjt3IM"/>
                        <p class="masonry-text">
                            Fit Check
                        </p>                      
                    </div>
                    <div>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b62acf-0cd7-4009-93ed-a0d140e5170d/deorpt1-a72d0361-b1b2-4533-954c-d4ffe385b912.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0YjYyYWNmLTBjZDctNDAwOS05M2VkLWEwZDE0MGU1MTcwZFwvZGVvcnB0MS1hNzJkMDM2MS1iMWIyLTQ1MzMtOTU0Yy1kNGZmZTM4NWI5MTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UlcHUb1ZfmpbhVLViu4AUHBccVZ4s10pHGn84xkQGwk"/>
                        <p class="masonry-text">
                            Product Placement
                        </p>                    
                    </div>
                </Masonry>
            </div>
            <p>
                Full Gallery
            </p>
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2 id="cloudi">Artwork / Cloudi Daze</h2>
            </div> 
            <div class="masonry-wrap">
                <Masonry columnsCount={2} gutter={"0.75em"}>
                    <img src="https://pbs.twimg.com/media/FYHzDnmUIAAgKp7?format=jpg&name=large"/>
                </Masonry>
            </div>
            <p>
                Full Gallery
            </p>
        </div>

    </div>
    </>
  );
};
export default Artwork;