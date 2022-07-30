import React from "react";

const AnjuCard = ({ item }) => {
  return (
    <div class="gallery_containerThree">
      {item.map((Val) => {
        return (
          <div key={Val.id}>
            <div>
              <p class="gallery-tag">{Val.cardtag}</p>
              <img src={Val.imageurl} alt={Val.title} />
              <p class="gallery-text">
                <strong>{Val.artistdisplay}</strong><br />
                {Val.titledisplay}<br />
                {Val.subtitledisplay}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnjuCard;