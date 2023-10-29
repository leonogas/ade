import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61NEXkGJygL._AC_SL1500_.jpg",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ images }) => {
  return (
    <Carousel
      infinite={true}
      ssr
      partialVisbile
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image) => {
        return (
          <div
            key={image}
            className="px-5 relative"
            style={{ minHeight: "800px" }}
          >
            <Image
              key={image}
              draggable={false}
              fill
              className="rounded-lg p-3 w-full h-full object-cover"
              src={image}
              alt="OK"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Simple;
