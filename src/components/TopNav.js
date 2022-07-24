import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <div class="main-column">
        <div class="logo">
          <img src="https://i.imgur.com/wZj6tJi.jpg" alt="Hellscape Logo"/>
        </div>
      </div>

      <div class="topnav">
        <NavLink to={"/"} exact>Home</NavLink>
        <NavLink to={"/music"}>Music</NavLink>
        <NavLink to={"/artwork"}>Artwork</NavLink>
        <NavLink to={"/archive"}>Archive</NavLink>
      </div>
    </>
  );
};
export default TopNav;