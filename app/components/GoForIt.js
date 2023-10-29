"use client";

import Link from "next/link";
import React from "react";
import { FaAmazon } from "react-icons/fa";

function GoForIt({ link }) {
  const slogan = "Buy in Amazon      ";
  return (
    <Link href={link}>
      <div className="... flex items-center justify-center">
        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
        >
          {slogan}
          <div className="pl-2">
            <FaAmazon />
          </div>
        </button>
      </div>
    </Link>
  );
}

export default GoForIt;
