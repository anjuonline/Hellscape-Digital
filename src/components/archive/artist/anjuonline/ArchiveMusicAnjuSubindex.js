import React, { useState } from "react";
import StatsMusicAnju from 'components/stats/StatsMusicAnju';
import { NavLink } from 'react-router-dom';
import ArchiveMusicAnjuFilter from 'components/archive/artist/anjuonline/ArchiveMusicAnjuFilter';
import AnjuCard from 'components/archive/artist/anjuonline/AnjuCard';

const ArchiveMusicAnjuSubindex = ( {songs} ) => {
    const [item, setItem] = useState(songs);

    const menuItems = [...new Set(songs.map((Val) => Val.filter))];
  
    const filterItem = (curcat) => {
      const newItem = songs.filter((newVal) => {
        if (curcat === 'all') return newVal; // return all items in list
        return newVal.filter === curcat; // return filtered list based on filter selection
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