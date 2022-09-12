import ArchiveIndex from 'components/archive/ArchiveIndex';

const Archive = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive - Announcements</h2>
            </div>            
            <div class="containedText">
                <h3>
                    September 11, 2022
                </h3> 
                <p>
                    Josen, notamachine & Meauxminy discographies have been added to the music archive.
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
            <div class="title-wrap-rainbow2">
                <h2>Archive - Site Changelog</h2>
            </div>            
            <div>
                <h3>
                    September 12, 2022
                </h3> 
                <p class="changelogtext">
                    <ul>
                        <li>&bull; Added 1 Lugosi feature to music archive</li>
                        <li>&bull; Fixed broken navigation in Lugosi archive</li>
                    </ul>  
                </p>    
                <h3>
                    September 11, 2022
                </h3> 
                <p class="changelogtext">
                    <ul>
                        <li>&bull; Added Site Changelog to Archive page</li>
                        <li>&bull; Added 118 Josen songs to music archive</li>
                        <li>&bull; Added 75 notamachine songs to music archive</li>
                        <li>&bull; Added 2 Meauxminy songs to music archive</li>
                        <li>&bull; Fixed broken navigation in Meauxminy archive</li>
                    </ul>  
                </p>              
            </div>
        </div>         
  
      </div>
    );
  };
  export default Archive;