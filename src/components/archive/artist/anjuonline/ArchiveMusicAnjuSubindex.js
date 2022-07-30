import React, { useState, useEffect } from "react";
import StatsMusicAnju from 'components/stats/StatsMusicAnju';
import { NavLink } from 'react-router-dom';
import ArchiveMusicAnjuFilter from 'components/archive/artist/anjuonline/ArchiveMusicAnjuFilter';
import MusicCardList from 'components/MusicCardList';

const ArchiveMusicAnjuSubindex = ({ songs }) => {
  const [songList, setSongList] = useState(songs);

  const menuItems = [...new Set(songs.map((Val) => Val.filter))];

  const filterSongs = (currentCategory) => {
    const filteredSongs = songs.filter((newVal) => {
      if (currentCategory === 'all') return newVal; // return all items in list
      return newVal.filter === currentCategory; // return filtered list based on filter selection
    });
    setSongList(filteredSongs);
  };

  useEffect(() => {
    //TODO: somehow set filter to 'all' on page load (while axios fetches data...)
  }, []);

  return (
    <>
      <div class="card-container">
        <div class="containedText">
          <h3>
            Filter By
          </h3>
        </div>
        <div class="flexColumn">
          <ArchiveMusicAnjuFilter
            filterItem={filterSongs}
            menuItems={menuItems}
          />

        </div>
        <MusicCardList list={songList} />
        <div class="containedText">
          <p>
            <div class="activeLink">
              <NavLink to={"/archive/music/anjuonline"}>
                All Releases (<StatsMusicAnju />)
              </NavLink>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};
export default ArchiveMusicAnjuSubindex;