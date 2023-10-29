"use client";

import "../home/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../home/ProductIndividual";
import { productData, responsive } from "../home/data";
import Link from "next/link";
import { Fragment } from "react";

export default function Slideshow2({ images }) {
  console.log("veremos" + images.images);
  const product = images.map(
    (item) => (
      console.log("H: " + item),
      (
        <Fragment key={item}>
          <div className="payaso"> {<Product url={item} />}</div>
        </Fragment>
      )
    )
  );

  return (
    <>
      <Carousel
        key={Math.random()}
        transitionDuration={400}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={5000}
        responsive={responsive}
      >
        {product}
      </Carousel>
    </>
  );
}
