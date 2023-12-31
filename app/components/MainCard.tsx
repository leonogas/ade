import Link from "next/link";
import Image from "next/image";

export default function Card(item) {
  return (
    <>
      <div className="my-0 p-4 sm:6 md:p-20 lg:p-20 mx-auto flex flex-col items-center bg-white lg:flex-row md:max-w-full justify-evenly dark:bg-gray-900">
        <Image
          priority={true}
          width={475}
          height={570}
          className="h-full w-full lg:h-[370px] lg:w-[570px] lg:order-2 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={item.item.frontmatter.image}
          alt={item.item.frontmatter.image}
        />

        <div className=" flex flex-col justify-between p-4 leading-normal">
          <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            #Tags
          </p>

          <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.item.frontmatter.title}
          </h2>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 ">
            {item.item.frontmatter.description.length > 100
              ? `${item.item.frontmatter.description.substring(0, 100)}...`
              : item.item.frontmatter.description}
          </p>

          <a className="text-center w-44 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 mr-2 my-3 dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700">
            Read Now
          </a>
        </div>
      </div>
    </>
  );
}
