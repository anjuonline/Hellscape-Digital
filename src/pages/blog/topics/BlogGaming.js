import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CrossSymbol } from 'utils/Symbols';
import '../Blog.css';
import BlogTopicNavigation from 'components/blog/BlogTopicNavigation';

const BlogGaming = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/blog-posts.json');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const featuredPosts = posts.filter(post => post.featured);
  const nonFeaturedPosts = posts
    .filter(post => !post.featured && post.tags.includes('Gaming'))
    .sort((a, b) => b.id - a.id);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = nonFeaturedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(nonFeaturedPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-column">
      <div className="logo">
        <NavLink to={"/"}><img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/></NavLink>
      </div>

      <div className="card-container">
        <div className="title-wrap-rainbow">
          <h2>Hellscape Digital - Blog</h2>
        </div>
        <p>Latest Articles&nbsp;&nbsp;&nbsp;&nbsp;
          <CrossSymbol />&nbsp;&nbsp;&nbsp;&nbsp;
          By Author&nbsp;&nbsp;&nbsp;&nbsp;
          <CrossSymbol />&nbsp;&nbsp;&nbsp;&nbsp;
          By Topic</p>
      </div>

      <div className="card-container">
        <div className="title-wrap-rainbow2">
          <h2>Featured Articles</h2>
        </div>
        {featuredPosts.map(post => (
          <div key={post.id} className="featured-article-wrapper">
            <div className="blog-featured-image-wrapper">
              <img src={post.image} className="blog-featured-image" alt={post.title}/>
            </div>
            <div className="blog-featured-article-title">{post.title}</div>
            <div className="blog-metadata-wrapper">
              <p className="blog-metadata">Written by <a href="/test">{post.author}</a><br/></p>
              <p className="blog-metadata-date">{post.date}<br/></p>
            </div>
            <p className="left-aligned blog-hashtags-container">
              {post.tags.map(tag => (
                <a href="/test" className="blog-hashtags" key={tag}>#{tag}</a>
              ))}
            </p>
            <p className="left-aligned blog-copy">{post.content}</p>
            <div className="blog-cta-wrapper">
              <p className="blog-cta-link">
                <a href="/test" className="read-more">Read More ✣</a>
              </p>
              <p className="blog-cta-link">
                <a href="/test" className="read-on-substack">Read on Substack ❐</a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <BlogTopicNavigation/>

      <div className="card-container">
        <div className="title-wrap-rainbow2">
          <h2>All Articles</h2>
        </div>
        <div className="non-featured-article-grid">
          {currentPosts.map(post => (
            <div key={post.id} className="non-featured-article-wrapper">
              <div className="blog-nonfeatured-image-wrapper">
                <img src={post.image} className="blog-featured-image" alt={post.title}/>
              </div>
              <div className="blog-nonfeatured-article-title">{post.title}</div>
              <div className="blog-metadata-wrapper">
                <p className="blog-metadata">Written by <a href="/test">{post.author}</a><br/></p>
                <p className="blog-metadata-date">{post.date}<br/></p>
              </div>
              <p className="left-aligned blog-hashtags-container">
                {post.tags.map(tag => (
                  <a href="/test" className="blog-hashtags" key={tag}> #{tag}</a>
                ))}
              </p>
              <p className="left-aligned blog-copy">{post.content}</p>
              <div className="blog-cta-wrapper">
                <p className="blog-cta-link">
                  <a href="/test" className="read-more">Read More ✣</a>
                </p>
                <p className="blog-cta-link">
                  <a href="/test" className="read-on-substack">Read on Substack ❐</a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={index + 1 === currentPage ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGaming;
