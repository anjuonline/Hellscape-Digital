import React from "react";

const MusicCard = ({ item }) => {
  return (
    <div key={item._id}>
      <div>
        <p class="gallery-tag">{item.cardtag}</p>
        <a href={item.soundcloud} target="_blank;" rel="noopener noreferrer">
          <img src={item.imageurl} alt={item.title} />
          <p class="gallery-text">
            <strong>{item.artistdisplay}</strong><br />
            {item.titledisplay}<br />
            {item.subtitledisplay}
          </p>
        </a>
      </div>
    </div>
  );
};

export default MusicCard;