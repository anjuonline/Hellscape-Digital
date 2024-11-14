import { NavLink } from 'react-router-dom';

const BlogTopicNavigation = () => {
    return (
      <>
        <div class="card-container-rainbow">
            <div class="featured-card">
            <div class="topic-text-outer-wrapper">
                <div class="topic-text-inner-wrapper">
                <div class="topic-text">
                    <NavLink to={"/blog/music"} class="topic-text">#Music</NavLink>
                </div>
                <div class="topic-text">
                    <NavLink to={"/blog/gaming"} class="topic-text">#Gaming</NavLink>
                </div>
                <div class="topic-text">
                    <NavLink to={"/blog/technology"} class="topic-text">#Technology</NavLink>
                </div>
                </div>
                <div class="topic-text-inner-wrapper-right">
                {/* <div class="topic-text">
                    Hellscape Exclusives
                </div>
                <div class="topic-text">
                    Hellscape Community
                </div> */}
                </div>
            </div>
            </div>
        </div>
      </>
    );
  };
  export default BlogTopicNavigation;