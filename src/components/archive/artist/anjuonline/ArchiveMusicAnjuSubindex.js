import React, { useState } from "react";
import StatsMusicAnju from 'components/stats/StatsMusicAnju';
import { NavLink } from 'react-router-dom';
import ArchiveMusicAnjuFilter from 'components/archive/artist/anjuonline/ArchiveMusicAnjuFilter';
import MusicAnjuData from 'data/music/MusicAnjuData';
import AnjuCard from 'components/archive/artist/anjuonline/AnjuCard';

const ArchiveMusicAnjuSubindex = ( {songs} ) => {
    const [item, setItem] = useState(songs);

    const menuItems = [...new Set(songs.map((Val) => Val.filterby))];
  
    const filterItem = (curcat) => {
      const newItem = songs.filter((newVal) => {
        return newVal.filterby === curcat;
      });
      setItem(newItem);
    };
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
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}
                />
                 
            </div>
           <AnjuCard item={item}/>
            <div class="containedText">
                <p>
                    <div class="activeLink">
                        <NavLink to={"/archive/music/anjuonline"}>
                            All Releases (<StatsMusicAnju/>)
                        </NavLink>
                    </div>
                </p>                
            </div>
        </div>    
      </>
    );
  };
  export default ArchiveMusicAnjuSubindex;