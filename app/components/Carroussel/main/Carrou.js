"use client";
import "./styles.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fragment } from "react";
import Section from "../main/Section";
import Simple from "../main/Simple";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

///////////////////////////////////
function Carrou(images) {
  console.log("Carrou: " + images.images);
  //<div className="imageGood">
  return (
    <>
      <Fragment>
        <Section>
          <Simple images={images.images} />
        </Section>
      </Fragment>
      ;
    </>
  );
}

export default Carrou;
