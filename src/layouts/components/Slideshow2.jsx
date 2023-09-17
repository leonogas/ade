"use client";

import "./css/App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import config from "@/config/config.json";
import Link from "next/link";

export default function Slideshow2(props) {
  const { blog_folder } = config.settings;
  const product = props.data.map((item) => (
    <Link key={item.url} href={`/${blog_folder}/${item.id}`}>
      <Product
        name={item.name}
        url={item.url}
        price={item.price}
        description={item.desc}
      />
    </Link>
  ));
  return (
    <Carousel
      transitionDuration={400}
      autoPlay="true"
      infinite={true}
      autoPlaySpeed={5000}
      responsive={responsive}
    >
      {product}
    </Carousel>
  );
}
