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
        <NavLink to={"/archive"}>Archive</NavLink>
      </div>
    </>
  );
};
export default TopNav;