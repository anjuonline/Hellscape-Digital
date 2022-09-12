import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';

const Archive = () => {
    return (
      <div class="main-column">
        <ArchiveIndex></ArchiveIndex>

        <div class="subindexFont">
            <p><NavLink to={"/updates"}>Updates</NavLink>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;<NavLink to={"/changelog"}>Site Changelog</NavLink></p>
        </div>        
  
      </div>
    );
  };
  export default Archive;