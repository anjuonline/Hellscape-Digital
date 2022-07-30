import React from "react";

const MusicCard = ({ item }) => {
  return (
    <div key={item.id}>
      <div>
        <p class="gallery-tag">{item.cardtag}</p>
        <img src={item.imageurl} alt={item.title} />
        <p class="gallery-text">
          <strong>{item.artistdisplay}</strong><br />
          {item.titledisplay}<br />
          {item.subtitledisplay}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;