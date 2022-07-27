import React from "react";

const AnjuCard = ({ item }) => {
  return (
    <>
      <div class="gallery_containerThree">
          {item.map((Val) => {
            return (
              <div
                key={Val.id}
              >
                <div>
                <p class="gallery-tag">{Val.tag}</p>
                <img src={Val.imageurl} alt={Val.title} />
                <p class="gallery-text">
                    <strong>{Val.artist}</strong><br/>
                    {Val.title}<br/>
                    {Val.subtitle}
                </p>
                </div>
                <div>
                  <div>
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            );
          })}
      </div>      
    </>
  );
};

export default AnjuCard;