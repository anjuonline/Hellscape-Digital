import { NavLink } from 'react-router-dom';

const ArchiveIndex = () => {
    return (
      <>
            <div class="card-container-rainbow">
                <div class="featured-card">
                    <p>
                        <strong>Index</strong>
                    </p>
                    <div class="flexColumn">
                    <div class="containedText">
                            <div class="activeLink">
                            <p>
                                <NavLink to={"/archive/music"}>Music</NavLink>
                            </p>
                            </div>
                    </div>
                    <div class="containedText">
                        <div class="activeLink">
                            <p>
                                <NavLink to={"/archive/artwork"}>Artwork</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
      </>
    );
  };
  export default ArchiveIndex;