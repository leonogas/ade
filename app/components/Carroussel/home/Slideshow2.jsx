"use client";

import "../home/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../home/Product";
import { productData, responsive } from "../home/data";
import Link from "next/link";
import { Fragment } from "react";

export default function Slideshow2({ images }) {
  const product = productData.map((item) => (
    <Fragment key={item.id}>
      <div>
        <Link href={`/${item.id}`}>
          {" "}
          {/* Use key on Link component */}
          <Product
            name={item.name}
            url={item.url}
            price={item.price}
            description={item.desc}
          />
        </Link>
      </div>
    </Fragment>
  ));

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
