import Image from "next/image";
import Link from "next/link";

function CardCategogy(item) {
  console.log(item.item.frontmatter.title);
  // Extract the last folder
  const lastFolder = item.item.id.match(/\/([^/]+)\/[^/]+$/)[1];

  // Extract the filename without the extension
  const filenameWithoutExtension = item.item.id.match(/\/([^/]+)\.md$/)[1];

  return (
    <div className="max-w-full bg-white dark:bg-gray-800">
      <div className="relative" style={{ minHeight: "300px" }}>
        <Image
          className="rounded-lg p-3 w-full h-full object-cover"
          fill
          src={item.item.frontmatter.image}
          alt=" demo image "
        />
      </div>

      <div className="p-3">
        <div className="flex mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            Mar 10, 2023{" "}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            5 min read{" "}
          </p>
        </div>
        <Link
          className="text-lg "
          href={`/blog/${lastFolder}/${filenameWithoutExtension}`}
        >
          {item.item.frontmatter.title}
        </Link>
      </div>
    </div>
  );
}

export default CardCategogy;
