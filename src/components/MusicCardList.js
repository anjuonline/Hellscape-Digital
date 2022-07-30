import React from "react";
import MusicCard from './MusicCard';

const MusicCardList = ({ list }) => {
  return (
    <div class="gallery_containerThree">
      {list.map((card) => {
        <MusicCard item={card} />
      })}
    </div>
  );
};

export default MusicCardList;