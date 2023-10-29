"use client";

import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";

function Grid() {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 250,
      height: 250,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 250,
      height: 250,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 250,
      height: 250,
    },
  ];

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (image) => {
    setFullScreenImage(image);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div>
      {isFullScreen && (
        <div className="full-screen-overlay" onClick={closeFullScreen}>
          <img
            className="full-screen-image"
            src={fullScreenImage.src}
            alt="Full Screen"
          />
        </div>
      )}

      <Gallery
        images={images.map((image, index) => ({
          ...image,
          onClick: () => alert(image),
        }))}
      />
    </div>
  );
}

export default Grid;
