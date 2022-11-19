import { NavLink } from 'react-router-dom';

const ArchiveArtworkSubindex = () => {
    return (
      <>
            <div class="containedText">
                <h3>
                    By Artist
                </h3>  
                <p>   
                    <div class="subindexFont">
                        <NavLink to={"/anjuonline/art/all"}>ANJU Online!</NavLink>
                        &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/cloudidaze/all"}>Cloudi Daze</NavLink>
                    </div>  
                </p>        
            </div>
      </>
    );
  };
  export default ArchiveArtworkSubindex;