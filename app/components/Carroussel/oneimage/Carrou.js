import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function Carrou({ images }) {
  return (
    <div>
      {" "}
      <main className="my-1 pb-2 lg:pt-1 lg:pb-2 bg-white dark:bg-gray-900">
        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">
          <Image
            src={images[0]}
            alt="sss"
            height={650}
            width={1224}
            className="rounded-t-lg bg-fixed h-[650px] w-full bg-origin-content  bg-cover bg-no-repeat p-2"
          />
          {/*
          <article className="my-12 prose lg:prose-xl dark:prose-invert w-full mx-auto max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h1
              style={{ margin: "0px" }}
              className="prose-h1:my-0 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white"
            >
              This is a blog ok
            </h1>

            <p
              style={{ margin: "0px" }}
              className="text-1xl font-extrabold leading-tight text-gray-500 lg:text-xl dark:text-white"
            >
              Blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </article>
          */}
        </div>
      </main>
    </div>
  );
}

export default Carrou;
