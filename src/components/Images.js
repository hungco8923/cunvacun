import React from "react";

export default function Images(props) {
  const { data, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };
  return (
    <div className="images--container">
      {data.map((slides, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image"
        >
          <img src={slides.src} alt={slides.description} />
        </div>
      ))}
    </div>
  );
}
