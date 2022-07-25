import ArchiveIndex from 'components/archive/ArchiveIndex';
import StatsMusicHellscapeRadio from 'components/stats/StatsMusicHellscapeRadio';

const ArchiveMusicHellscapeRadio = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex> 

        <div class="card-container">
            <div class="sticky">
                <div class="title-wrap-rainbow2">
                    <h2>
                        <a href="/archive">Archive</a> /&nbsp;
                        <a href="/archive/music">Music</a> /
                        Hellscape Radio (<StatsMusicHellscapeRadio/>)</h2>
                </div>  
            </div>          
            <div class="gallery_containerThree">
                    <div class="gallery_item">
                        <p class="gallery-tag">Mix</p>
                        <a href="https://soundcloud.com/hellscapedigital/hellscape-radio-vol-3" target="_blank" rel="noopener noreferrer">    
                            <img src="https://i1.sndcdn.com/artworks-oRXsFL7pajM9zxnU-yDhLaA-t500x500.jpg" width="100%" alt=""/><br/>
                            <p class="gallery-text">
                                <strong>Hellscape Radio, Vol. 3</strong><br/>
                                (Hosted by ANJU Online!)
                            </p>
                        </a>
                    </div>                     
                    <div class="gallery_item">
                        <p class="gallery-tag">Mix</p>
                        <a href="https://soundcloud.com/hellscapedigital/hellscape-radio-vol-2" target="_blank" rel="noopener noreferrer">    
                            <img src="https://i1.sndcdn.com/artworks-tF08flAkDpvmjgof-uvDVsg-t500x500.jpg" width="100%" alt=""/><br/>
                            <p class="gallery-text">
                                <strong>Hellscape Radio, Vol. 2</strong><br/>
                                (Hosted by ANJU Online!)
                            </p>
                        </a>
                    </div> 
                    <div class="gallery_item">
                        <p class="gallery-tag">Mix</p>
                        <a href="https://soundcloud.com/hellscapedigital/hellscape-radio-vol-1-private-server-underground-minimix-hosted-by-anju-online-1" target="_blank" rel="noopener noreferrer">    
                            <img src="https://i1.sndcdn.com/artworks-000594396492-7c85fj-t500x500.jpg" width="100%" alt=""/><br/>
                            <p class="gallery-text">
                                <strong>Hellscape Radio, Vol. 1</strong><br/>
                                (Hosted by ANJU Online!)
                            </p>
                        </a>
                    </div>                                           
            </div>
        </div> 
  
      </div>
    );
  };
  export default ArchiveMusicHellscapeRadio;