import ArchiveIndex from 'components/archive/ArchiveIndex';
import { NavLink } from 'react-router-dom';
import BlogMainStatic from 'components/blog/BlogMainStatic';
import ArchiveStreamVodsStatic from 'components/archive/artist/hellscape/ArchiveStreamVodsStatic';
import StreamVodsSubindex from 'components/archive/artist/hellscape/StreamVodsSubindex';
import { CrossSymbol } from 'utils/Symbols';
import './Blog.css';

const BlogStatic = () => {

    return (
      <div class="main-column">

        {/* Note from anju: try class 'rainbow-link' on a tags */}
        
        <div class="logo">
          <NavLink to={"/"}><img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/></NavLink>
        </div>

        <div class="card-container">
          <div class="title-wrap-rainbow">
            <h2>Hellscape Digital - Blog</h2>
          </div>
          <p>Latest Articles&nbsp;&nbsp;&nbsp;&nbsp;
            <CrossSymbol />&nbsp;&nbsp;&nbsp;&nbsp;
            By Author&nbsp;&nbsp;&nbsp;&nbsp;
            <CrossSymbol />&nbsp;&nbsp;&nbsp;&nbsp;
            By Topic</p>
        </div>

        <div class="card-container">
          <div class="title-wrap-rainbow2">
            <h2>Featured Articles</h2>
          </div>
          <div class="featured-article-wrapper">
            <div class="blog-featured-image-wrapper">
              <img src="https://img.itch.zone/aW1nLzEyOTMzNDU0LmpwZw==/original/gjym1n.jpg" class="blog-featured-image"/>
            </div>
            <div class="blog-featured-article-title-test">Anju Plays: Destonia2D By Gothika Studios</div>
            <div class="blog-metadata-wrapper">
              <p class="blog-metadata">Written by <a href="/test">ANJU Online!</a><br/></p>
              <p class="blog-metadata-date">Aug. 2, 2024<br/></p>
            </div>
            <p class="left-aligned blog-hashtags-container"><a href="/test" class="blog-hashtags">#Gaming</a> <a href="/test" class="blog-hashtags">#HellscapeCommunity</a></p>
            <p class="left-aligned blog-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pellentesque mi. Mauris vehicula risus nisi, non faucibus nibh lobortis in. Aenean ornare, nibh ut mollis dignissim, nisi odio luctus purus, ut rutrum lectus dui a sem.</p>
            <div class="blog-cta-wrapper">
              <p class="blog-cta-link">
                <a href="/test" class="read-more">Read More ✣</a>
              </p>
              <p class="blog-cta-link">
                <a href="/test" class="read-on-substack">Read on Substack ❐</a>
              </p>
            </div>
          </div>
          <br/>
          <div class="featured-article-wrapper">
            <div class="blog-featured-image-wrapper">
              <img src="https://pbs.twimg.com/media/Fjy_P1KXkBY2AJc?format=jpg&name=large" class="blog-featured-image"/>
            </div>
            <div class="blog-featured-article-title-test">Album Review: Solid State Memories by ANJU Online!</div>
            <div class="blog-metadata-wrapper">
              <p class="blog-metadata">Written by <a href="/test">Meauxminy</a><br/></p>
              <p class="blog-metadata-date">Aug. 2, 2024<br/></p>
            </div>
            <p class="left-aligned blog-hashtags-container"><a href="/test" class="blog-hashtags">#Gaming</a> <a href="/test" class="blog-hashtags">#HellscapeCommunity</a></p>
            <p class="left-aligned blog-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pellentesque mi. Mauris vehicula risus nisi, non faucibus nibh lobortis in. Aenean ornare, nibh ut mollis dignissim, nisi odio luctus purus, ut rutrum lectus dui a sem.</p>
            <div class="blog-cta-wrapper">
              <p class="blog-cta-link">
                <a href="/test" class="read-more">Read More ✣</a>
              </p>
              <p class="blog-cta-link">
                <a href="/test" class="read-on-substack">Read on Substack ❐</a>
              </p>
            </div>
          </div>
          <br/>
          <div class="featured-article-wrapper">
            <div class="blog-featured-image-wrapper">
              <img src="https://i.scdn.co/image/ab67616d00001e02992faa6abe177a9941899ce9" class="blog-featured-image"/>
            </div>
            <div class="blog-featured-article-title-test">How Lugosi is Redefining 'Jersey Devil'</div>
            <div class="blog-metadata-wrapper">
              <p class="blog-metadata">Written by <a href="/test">ANJU Online!</a><br/></p>
              <p class="blog-metadata-date">Jul. 31, 2024<br/></p>
            </div>
            <p class="left-aligned blog-hashtags-container"><a href="/test" class="blog-hashtags">#Music</a> <a href="/test" class="blog-hashtags">#HellscapeExclusive</a></p>
            <p class="left-aligned blog-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et pellentesque mi. Mauris vehicula risus nisi, non faucibus nibh lobortis in. Aenean ornare, nibh ut mollis dignissim, nisi odio luctus purus, ut rutrum lectus dui a sem.</p>
            <div class="blog-cta-wrapper">
              <p class="blog-cta-link">
                <a href="/test" class="read-more">Read More ✣</a>
              </p>
              <p class="blog-cta-link">
                <a href="/test" class="read-on-substack">Read on Substack ❐</a>
              </p>
            </div>
          </div>
        </div>
  
      </div>
    );
  };
  export default BlogStatic;