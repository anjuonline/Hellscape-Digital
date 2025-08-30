// import { NavLink, Link } from 'react-router-dom';
// import React, { useState } from "react";
// import './TopNav.css';


// const TopNav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showCommunitySubMenu, setShowCommunitySubMenu] = useState(false);
//   const [showMusicSubMenu, setShowMusicSubMenu] = useState(false);
//   const [showArchiveSubMenu, setShowArchiveSubMenu] = useState(false);

//   const handleCommunitySubMenuMouseEnter = () => {
//     setShowCommunitySubMenu(true);
//   };

//   const handleCommunitySubMenuMouseLeave = () => {
//     setShowCommunitySubMenu(false);
//   };

//   const handleMusicSubMenuMouseEnter = () => {
//     setShowMusicSubMenu(true);
//   };

//   const handleMusicSubMenuMouseLeave = () => {
//     setShowMusicSubMenu(false);
//   };

//   const handleArchiveSubMenuMouseEnter = () => {
//     setShowArchiveSubMenu(true);
//   };

//   const handleArchiveSubMenuMouseLeave = () => {
//     setShowArchiveSubMenu(false);
//   };

//   return (
//     <>
//       <div class="sticky-topnav-container">
//         <div class="sticky-topnav-column">           
//           <button
//             className={`hamburger-menu${isMenuOpen ? ' open' : ''}`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             &#9776;
//           </button>
//           <div className={`topnav${isMenuOpen ? ' responsive' : ''} activeLink`}>
//             <div onMouseEnter={handleMusicSubMenuMouseEnter} onMouseLeave={handleMusicSubMenuMouseLeave}>
//               <NavLink to={"/music"} exact>Music</NavLink>
//               {showMusicSubMenu && (
//                   <div className="sub-menu" onMouseEnter={handleMusicSubMenuMouseEnter} onMouseLeave={handleMusicSubMenuMouseLeave}>
//                     <a href="/anjuonline/music/all">ANJU Online!</a>
//                     <a href="/kawaiiry/all">Kawaii Ry</a>
//                     <a href="/lugosi/all">Lugosi</a>
//                     <a href="/meauxminy/all">Meauxminy</a>
//                     <a href="/josen/all">Josen</a>
//                     <a href="/notamachine/all">notamachine</a>
//                     <a href="/remy3d/all">Remy3D</a>
//                     <a href="/semaj/all">Semaj</a>
//                     <a href="/rileylol/all">rileylol</a>
//                     <a href="#">Lil Dujour</a>
//                 </div>
//               )}
//             </div>
//             <div onMouseEnter={handleArchiveSubMenuMouseEnter} onMouseLeave={handleArchiveSubMenuMouseLeave}>
//               <NavLink to={"/archive"} exact>Archive</NavLink>
//               {showArchiveSubMenu && (
//                 <div className="sub-menu" onMouseEnter={handleArchiveSubMenuMouseEnter} onMouseLeave={handleArchiveSubMenuMouseLeave}>
//                   <a href="/archive/music">Music</a>
//                   <a href="/archive/artwork">Artwork</a>
//                   <a href="/archive/vods">Stream VODs</a>
//                 </div>
//               )}
//             </div>
//             <div onMouseEnter={handleCommunitySubMenuMouseEnter} onMouseLeave={handleCommunitySubMenuMouseLeave}>
//               <NavLink to={"/underconstruction"} exact>Community</NavLink>
//               {showCommunitySubMenu && (
//                 <div className="sub-menu" onMouseEnter={handleCommunitySubMenuMouseEnter} onMouseLeave={handleCommunitySubMenuMouseLeave}>
//                   <a href="/chat">Chat <i>(NEW!)</i></a>
//                   <a href="https://discord.gg/Dg4a3pQrg6" target="_blank;">Discord</a>
//                 </div>
//               )}
//             </div>
//             <a href="/underconstruction" target="_blank" rel="noopener nofollower">Blog</a>
//             <a href="https://hellscapedigital.myshopify.com/" target="_blank" rel="noopener nofollower">Store</a>
//           </div>
//           <div class="topnavhomebutton">
//             <NavLink to={"/"} exact><strong>Hellscape Digital</strong> v1.1.0 🌈🔪</NavLink>
//           </div>      
//         </div>
//       </div>
//       <div className={`fullscreen-menu${isMenuOpen ? ' open' : ''}`}>
//         <NavLink to="/music" onClick={() => setIsMenuOpen(false)}>Music</NavLink>
//         <NavLink to="/archive" onClick={() => setIsMenuOpen(false)}>Archive</NavLink>
//         <NavLink to="/underconstruction" onClick={() => setIsMenuOpen(false)}>Community</NavLink>
//         <NavLink to="/underconstruction" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
//         <a href="https://hellscapedigital.myshopify.com/" target="_blank" rel="noopener nofollower" onClick={() => setIsMenuOpen(false)}>Store</a>
//       </div>
//     </>
//   );
// };

// export default TopNav;

import { NavLink, Link } from 'react-router-dom';
import React, { useState } from "react";
import './TopNav.css';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Store the active sub-menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubMenuToggle = (menu) => {
    if (activeSubMenu === menu) {
      setActiveSubMenu(null); // Close the currently active sub-menu
    } else {
      setActiveSubMenu(menu); // Open the selected sub-menu
    }
  };

  return (
    <>
      <div className="sticky-topnav-container">
        <div className="sticky-topnav-column">
          <button
            className={`hamburger-menu${isMenuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
          <div className={`topnav${isMenuOpen ? ' responsive' : ''} activeLink`}>
            <div onMouseEnter={() => handleSubMenuToggle('music')} onMouseLeave={() => handleSubMenuToggle('music')}>
              <NavLink to={"/music"} exact>Music</NavLink>
              {activeSubMenu === 'music' && (
                <div className="sub-menu">
                  <a href="/anjuonline/music/all">ANJU Online!</a>
                  <a href="/kawaiiry/all">Kawaii Ry</a>
                  <a href="/lugosi/all">Lugosi</a>
                  <a href="/meauxminy/all">Meauxminy</a>
                  <a href="/josen/all">Josen</a>
                  <a href="/notamachine/all">notamachine</a>
                  <a href="/remy3d/all">Remy3D</a>
                  <a href="/semaj/all">Semaj</a>
                  <a href="/rileylol/all">rileylol</a>
                  <a href="/lildujour/all">Lil Dujour</a>
                </div>
              )}
            </div>
            <div onMouseEnter={() => handleSubMenuToggle('archive')} onMouseLeave={() => handleSubMenuToggle('archive')}>
              <NavLink to={"/archive"} exact>Archive</NavLink>
              {activeSubMenu === 'archive' && (
                <div className="sub-menu">
                  <a href="/archive/music">Music</a>
                  <a href="/archive/artwork">Artwork</a>
                  {/* <a href="/archive/vods">Stream VODs</a> */}
                </div>
              )}
            </div>
            <div onMouseEnter={() => handleSubMenuToggle('community')} onMouseLeave={() => handleSubMenuToggle('community')}>
              <NavLink to={"/community"} exact>Community</NavLink>
              {activeSubMenu === 'community' && (
                <div className="sub-menu">
                  <a href="/chat">Chat <i>(NEW!)</i></a>
                  {/* <a href="https://discord.gg/Dg4a3pQrg6" target="_blank;">Discord</a> */}
                </div>
              )}
            </div>
            <a href="/underconstruction">Blog</a>
            <a href="/underconstruction">Store</a>
          </div>
          <div className="topnavhomebutton">
            <NavLink to={"/"} exact><strong>Hellscape Digital</strong> v1.1.1 🌈🔪</NavLink>
          </div>      
        </div>
      </div>
      <div className={`fullscreen-menu${isMenuOpen ? ' open' : ''}`}>
        <div className="fullscreen-menu-title">
          <NavLink to="#" onClick={() => handleSubMenuToggle('music')}>Music</NavLink>
          {activeSubMenu === 'music' && (
            <div className="fullscreen-sub-menu card-container-rainbow margintop05em">
              <NavLink to="/music" onClick={toggleMenu} className="fullscreen-sub-menu-text">All Releases</NavLink>
              <NavLink to="/anjuonline/music/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">ANJU Online!</NavLink>
              <NavLink to="/kawaiiry/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Kawaii Ry</NavLink>
              <NavLink to="/lugosi/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Lugosi</NavLink>
              <NavLink to="/meauxminy/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Meauxminy</NavLink>
              <NavLink to="/josen/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Josen</NavLink>
              <NavLink to="/notamachine/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">notamachine</NavLink>
              <NavLink to="/remy3d/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Remy3D</NavLink>
              <NavLink to="/semaj/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Semaj</NavLink>
              <NavLink to="/rileylol/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">rileylol</NavLink>
              <NavLink to="/lildujour/all" onClick={toggleMenu} className="fullscreen-sub-menu-text">Lil Dujour</NavLink>
            </div>
          )}
        </div>
        <div className="fullscreen-menu-title">
          <NavLink to="#" onClick={() => handleSubMenuToggle('archive')}>Archive</NavLink>
          {activeSubMenu === 'archive' && (
            <div className="fullscreen-sub-menu card-container-rainbow margintop05em">
              <NavLink to="/archive/music" onClick={toggleMenu} className="fullscreen-sub-menu-text">Music</NavLink>
              <NavLink to="/archive/artwork" onClick={toggleMenu} className="fullscreen-sub-menu-text">Artwork</NavLink>
              <NavLink to="/archive/vods" onClick={toggleMenu} className="fullscreen-sub-menu-text">Stream VODs</NavLink>
            </div>
          )}
        </div>
        <div className="fullscreen-menu-title">
          <NavLink to="/community" onClick={() => handleSubMenuToggle('community')}>Community</NavLink>
          {activeSubMenu === 'community' && (
            <div className="fullscreen-sub-menu card-container-rainbow margintop05em">
              <NavLink to="/chat" onClick={toggleMenu} className="fullscreen-sub-menu-text">Chat <i>(NEW!)</i></NavLink>
              {/* <a href="https://discord.gg/Dg4a3pQrg6" target="_blank" onClick={toggleMenu} className="fullscreen-sub-menu-text">Discord</a> */}
            </div>
          )}
        </div>
        <NavLink to="/underconstruction" onClick={toggleMenu}>Blog</NavLink>
        <a href="https://hellscapedigital.myshopify.com/" target="_blank" rel="noopener nofollower" onClick={toggleMenu}>Store</a>
      </div>
    </>
  );
};

export default TopNav;

