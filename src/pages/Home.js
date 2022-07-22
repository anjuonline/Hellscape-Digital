import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Home = () => {
  return (
    <div class="main-column">
        <div class="card-container-rainbow">
            <div class="containedText">
                <p>
                    Hellscape Digital is an artist collective and friend group; a creative multiverse driven by music, fashion, design, gaming, and avant-garde web culture.
                </p>
                <p>
                    This website is a constant work in progress—an evolving omnibus of Hellscape's full music & art catalog, new releases, upcoming events, and documentation of our work as artists.
                </p>
            </div>
        </div>

        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Updates</h2>
            </div>            
            <div class="containedText">
            <h3>
                July 22, 2022
            </h3> 
            <p>
                This is a test update.
            </p>
            <h3>
                July 18, 2022
            </h3> 
            <p>
                Welcome to the new Hellscape Digital site! Take a look around and explore the pages, but keep in mind that pretty much nothing works yet. More updates to follow.
            </p>                   
            </div>
        </div>        

        <div class="card-container">
            <div class="title-wrap-rainbow">
                <h2>Latest Releases</h2>
            </div>
            <div class="spacer"><h3>Music</h3></div>
            <div class="gallery_containerThree">
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Kawaii Ry</strong><br/>KILLMILORD Freestyle<br/>(Prod. Foreigner2x)</p>
                </div>    
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Josen</strong><br/>BITCH!YOU!A!DUB!<br/>(Prod. Snake)</p>
                </div> 
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Notamachine</strong><br/>Artificial</p>
                </div>   
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-NHMUEUaj0ew3bunu-6aFVbw-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Kawaii Ry</strong><br/>KILLMILORD Freestyle<br/>(Prod. Foreigner2x)</p>
                </div>    
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-rEyTQxOLQoxWYufg-ip6Zug-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Josen</strong><br/>BITCH!YOU!A!DUB!<br/>(Prod. Snake)</p>
                </div> 
                <div class="gallery_item">
                    <img src="https://i1.sndcdn.com/artworks-m07hEzNRsO0mhwyA-V6cMUg-t500x500.jpg" width="100%"/><br/><p class="gallery-text"><strong>Notamachine</strong><br/>Artificial</p>
                </div>                                         
            </div>  
            <h3>Art</h3>
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
                <h2>Current Sitemap</h2>
            </div>
            <div class="containedText">
                <div class="flexColumn">
                    <div class="flex-column-contained-text">
                        <p>
                            Home<br/>
                        </p>
                    </div>
                    <div class="flex-column-contained-text">
                        <p>
                            Artwork<br/>
                        </p>
                    </div>
                </div>  
            </div>        
        </div>        

        <div class="card-container">
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
        </div>
    </div>
  );
};
export default Home;