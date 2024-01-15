import { NavLink, Link } from 'react-router-dom';
import React, { useState } from "react";
import './TopNav.css';


const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCommunitySubMenu, setShowCommunitySubMenu] = useState(false);
  const [showMusicSubMenu, setShowMusicSubMenu] = useState(false);
  const [showArchiveSubMenu, setShowArchiveSubMenu] = useState(false);

  const handleCommunitySubMenuMouseEnter = () => {
    setShowCommunitySubMenu(true);
  };

  const handleCommunitySubMenuMouseLeave = () => {
    setShowCommunitySubMenu(false);
  };

  const handleMusicSubMenuMouseEnter = () => {
    setShowMusicSubMenu(true);
  };

  const handleMusicSubMenuMouseLeave = () => {
    setShowMusicSubMenu(false);
  };

  const handleArchiveSubMenuMouseEnter = () => {
    setShowArchiveSubMenu(true);
  };

  const handleArchiveSubMenuMouseLeave = () => {
    setShowArchiveSubMenu(false);
  };

  return (
    <>
      <div class="sticky-topnav-container">
        <div class="sticky-topnav-column">           
          {/* <div class="logoicon">
            <a href="#"><img src="https://i.imgur.com/pGc2Bfg.png" alt="Logo"/></a>
          </div> */}
          <button
            className={`hamburger-menu${isMenuOpen ? ' open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
          <div className={`topnav${isMenuOpen ? ' responsive' : ''} activeLink`}>
            <div onMouseEnter={handleMusicSubMenuMouseEnter} onMouseLeave={handleMusicSubMenuMouseLeave}>
              <NavLink to={"/music"} exact>Music</NavLink>
              {showMusicSubMenu && (
                  <div className="sub-menu" onMouseEnter={handleMusicSubMenuMouseEnter} onMouseLeave={handleMusicSubMenuMouseLeave}>
                    <a href="/anjuonline/music/all">ANJU Online!</a>
                    <a href="/kawaiiry/all">Kawaii Ry</a>
                    <a href="/lugosi/all">Lugosi</a>
                    <a href="/meauxminy/all">Meauxminy</a>
                    <a href="/josen/all">Josen</a>
                    <a href="/notamachine/all">notamachine</a>
                    <a href="/remy3d/all">Remy3D</a>
                    <a href="/semaj/all">Semaj</a>
                    <a href="/rileylol/all">rileylol</a>
                    <a href="#">Lil Dujour</a>
                </div>
              )}
            </div>
            <div onMouseEnter={handleArchiveSubMenuMouseEnter} onMouseLeave={handleArchiveSubMenuMouseLeave}>
              <NavLink to={"/archive"} exact>Archive</NavLink>
              {showArchiveSubMenu && (
                <div className="sub-menu" onMouseEnter={handleArchiveSubMenuMouseEnter} onMouseLeave={handleArchiveSubMenuMouseLeave}>
                  <a href="/archive/music">Music</a>
                  <a href="/archive/artwork">Artwork</a>
                  <a href="/archive/vods">Stream VODs</a>
                </div>
              )}
            </div>
            <div onMouseEnter={handleCommunitySubMenuMouseEnter} onMouseLeave={handleCommunitySubMenuMouseLeave}>
              <NavLink to={"/underconstruction"} exact>Community</NavLink>
              {showCommunitySubMenu && (
                <div className="sub-menu" onMouseEnter={handleCommunitySubMenuMouseEnter} onMouseLeave={handleCommunitySubMenuMouseLeave}>
                  <a href="/chat">Chat <i>(NEW!)</i></a>
                  <a href="https://discord.gg/Dg4a3pQrg6" target="_blank;">Discord</a>
                </div>
              )}
            </div>
            <a href="/underconstruction" target="_blank" rel="noopener nofollower">Blog</a>
            <a href="https://hellscapedigital.myshopify.com/" target="_blank" rel="noopener nofollower">Store</a>
          </div>
          <div class="topnavhomebutton">
            <NavLink to={"/"} exact><strong>Hellscape Digital</strong> v1.1.0 🌈🔪</NavLink>
          </div>      
        </div>
      </div>
      <div className={`fullscreen-menu${isMenuOpen ? ' open' : ''}`}>
        <NavLink to="/music" onClick={() => setIsMenuOpen(false)}>Music</NavLink>
        <NavLink to="/underconstruction" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/archive" onClick={() => setIsMenuOpen(false)}>Archive</NavLink>
        <a href="https://hellscapedigital.myshopify.com/" target="_blank" rel="noopener nofollower" onClick={() => setIsMenuOpen(false)}>Store</a>
      </div>
    </>
  );
};

export default TopNav;