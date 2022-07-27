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
        <NavLink to={"/"} exact>&nbsp;&nbsp;Home&nbsp;</NavLink>
        <NavLink to={"/archive"}>&nbsp;Archive&nbsp;&nbsp;</NavLink>
      </div>
    </>
  );
};
export default TopNav;