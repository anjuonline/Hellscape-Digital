import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const AnjuDesignStatic = () => {
    return (
      <>
        <div class="masonry-wrap">
            <Masonry columnsCount={1} gutter={"0.75em"}>

                <div>
                    <a href="https://i.imgur.com/QeJlyRS.png" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/QeJlyRS.png"/>                  
                        <p class="gallery-text">
                            <strong>Hellscape Digital Logo</strong> (2020)
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://i.imgur.com/x1qKIzP.jpg" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/x1qKIzP.jpg"/>                  
                        <p class="gallery-text">
                            Cover art for <strong>ANJU Online! - Knife Shopping</strong>
                        </p>
                    </a> 
                </div>

                <div>
                    <a href="https://i.imgur.com/eCB2G2q.jpeg" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/eCB2G2q.jpeg"/>                  
                        <p class="gallery-text">
                            <strong>"The World is Yours"</strong><br/>
                            Club poster for DJ Caasim @ Flora in Richmond, VA
                        </p>
                    </a> 
                </div>

                <div>
                        <img src="https://i.imgur.com/i7iJUm5.jpeg"/>                  
                        <p class="gallery-text">
                            Tour poster for Nacho Picasso & Sadistik @ Strange Matter, Richmond VA (2017)
                        </p>
                </div>

            </Masonry>
        </div>      
      </>
    );
  };
  export default AnjuDesignStatic;