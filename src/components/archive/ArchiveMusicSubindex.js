import { NavLink } from 'react-router-dom';

const ArchiveMusicSubindex = () => {
    return (
      <>           
            <div class="containedText">
                <h3>
                    By Artist<br/>&nbsp;
                </h3>  
                <h5>   
                    <div class="subindexFont">
                        <NavLink to={"/anjuonline/music/all"}>ANJU Online!</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/kawaiiry/all"}>Kawaii Ry</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/lugosi/all"}>Lugosi</NavLink>    
                    </div>  
                </h5>
                <h5>
                    <div class="subindexFont">
                        <NavLink to={"/meauxminy/all"}>Meauxminy</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/josen/all"}>Josen</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/notamachine/all"}>notamachine</NavLink>                 
                    </div>  
                </h5> 
                <h5>
                    <div class="subindexFont">
                        <NavLink to={"/remy3d/all"}>Remy3D</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/semaj/all"}>Semaj</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/rileylol/all"}>rileylol</NavLink>   
                    </div> 
                </h5>
                <h5>
                    <div class="subindexFont">
                        <NavLink to={"/lildujour/all"}>Lil Dujour</NavLink>         
                        <br/>&nbsp;
                    </div>
                </h5>
                <h5>
                    <div class="subindexFont">
                        <NavLink to={"/videos/all"}>Music Videos</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                        <NavLink to={"/hellscaperadio"}>Hellscape Radio<br/></NavLink>
                    </div>  
                </h5>     
   
            </div>
      </>
    );
  };
  export default ArchiveMusicSubindex;