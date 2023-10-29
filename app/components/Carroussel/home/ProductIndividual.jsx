"use client";

import React from "react";

export default function Product({ url }) {
  console.log("-------------" + url);
  console.log("-------------" + url);
  return (
    <div className="card">
      <img className="product--image" src={url} alt="product image" />
    </div>
  );
}
