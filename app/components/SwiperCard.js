import React from "react";
import DisplayImage from "../components/Carroussel/oneimage/Carrou";
import DisplayImageHome from "../components/Carroussel/infiniteLoop/Slideshow2";
import DisplayImageCommon from "../components/Carroussel/part1/Carrou";
import DisplayImageMain from "../components/Carroussel/main/Carrou";
import DisplayImageDots from "../components/Carroussel/main/Carrou";
function SwiperCard(images) {
  let content;
  switch (images.length) {
    case 7:
      content = <DisplayImageDots images={images} />;
      break;
    case 1:
      content = <DisplayImage images={images} />;
      break;
    case 3:
      content = <DisplayImageCommon images={images} />;
      break;
    case 5:
      content = <DisplayImageHome images={images} />;
      break;
    case 6:
      content = <DisplayImageMain images={images} />;
      break;
    default:
      content = null; // Handle other cases as needed
  }

  console.log(
    "var passar do SwiperCard para o Carrou: " + images.images.length
  );
  return (
    <div className="px-5">
      {images.images.length === 1 && (
        <DisplayImage images={images.images}></DisplayImage>
      )}
      {images.images.length === 5 && (
        <>
          <DisplayImageHome images={images.images}></DisplayImageHome>
        </>
      )}
      {images.images.length === 3 && (
        <>
          <DisplayImageCommon images={images.images}></DisplayImageCommon>
        </>
      )}

      {images.images.length === 6 && (
        <>
          <DisplayImageMain images={images.images}></DisplayImageMain>
        </>
      )}
      {images.images.length === 7 && (
        <>
          <DisplayImageDots images={images.images}></DisplayImageDots>
        </>
      )}
    </div>
  );
}

export default SwiperCard;
