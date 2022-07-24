import ArchiveIndex from 'components/archive/ArchiveIndex';

const Archive = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>
        <div class="card-container">
            <div class="title-wrap-rainbow2">
                <h2>Archive / Announcements</h2>
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
  
      </div>
    );
  };
  export default Archive;