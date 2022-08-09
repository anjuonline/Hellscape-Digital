import React from "react";
import MusicCard from 'components/MusicCard';

const MusicCardList = ({ list }) => {
  return (
    <div class="gallery_containerThree">
      {list.map((item) => {
        return (
          <MusicCard item={item} />
        );
      })}
    </div>
  );
};

export default MusicCardList;