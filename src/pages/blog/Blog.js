import ArchiveIndex from 'components/archive/ArchiveIndex';
// import { NavLink } from 'react-router-dom';
import BlogMainStatic from 'components/blog/BlogMainStatic';
import ArchiveStreamVodsStatic from 'components/archive/artist/hellscape/ArchiveStreamVodsStatic';
import StreamVodsSubindex from 'components/archive/artist/hellscape/StreamVodsSubindex';

const Blog = () => {

    return (
      <div class="main-column">
        
        {/* <ArchiveIndex /> */}
        
        <div class="card-container">
          <div class="title-wrap-rainbow2">
            <h2>Hellscape Digital - Blog</h2>
          </div>
          {/* <ArchiveMusicSubindex/> */}
        </div>
  
        <div class="card-container">
          <div class="sticky">
            {/* <BlogSubindex/> */}
            <BlogMainStatic/>
          </div>
        </div>
  
      </div>
    );
  };
  export default Blog;