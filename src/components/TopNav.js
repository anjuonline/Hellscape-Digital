import { NavLink, Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <div class="main-column">
        <div class="logo">
          <Link to={"/"}><img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/></Link>
        </div>
      </div>

      <div class="topnav activeLink">
        <NavLink to={"/"} exact>Home</NavLink>
        <NavLink to={"/music"} exact>Music</NavLink>
        <NavLink to={"/archive"} exact>Archive</NavLink>
        {/* <NavLink to={"/store"} exact>Store</NavLink> */}
        <a href="https://hellscapedigital.myshopify.com/" target="_blank" rel="noopener nofollower">Store</a>
      </div>
    </>
  );
};
export default TopNav;