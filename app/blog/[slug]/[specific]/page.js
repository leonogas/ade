import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkDown from "react-markdown";
import Image from "next/image";
import SwiperCard from "../../../components/SwiperCard";
import GoForIt from "../../../components/GoForIt";
import BreadCumbs from "../../../components/BreadCumbs";
export default function Page({ params }) {
  const { specific, slug } = params;
  console.log(params);
  const folderPath = path.join(
    process.cwd(),
    "teste/" + slug + "/" + specific + ".md"
  );

  const markdownWithMeta = fs.readFileSync(folderPath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const indexFiles = { id: folderPath, frontmatter, content };

  console.log(indexFiles.frontmatter.url);

  //console.log("image 1 - " + indexFiles.frontmatter.images[0]);

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: slug, url: "/blog/" + slug },
    { name: specific, url: "#" },
  ];

  return (
    <>
      <BreadCumbs items={breadcrumbItems} />
      <div className="px-5">
        <SwiperCard images={indexFiles.frontmatter.images} />
      </div>
      {/* <div className="flex justify-center items-center">
        {indexFiles.frontmatter.images.length === 1 && (
          <Image
            src={indexFiles.frontmatter.images[0]}
            alt=""
            height={420}
            width={600}
            className="mb-4 rounded"
            //className="rounded-lg p-3"
          />
        )}
      </div>*/}
      <div className="pt-4">
        <GoForIt link={indexFiles.frontmatter.url} />
      </div>

      <div className="... flex items-center justify-center">
        <ul>
          <article className="prose lg:prose-xl">
            <ReactMarkDown>{indexFiles.content}</ReactMarkDown>
          </article>
        </ul>
      </div>
      <div className="pt-4"></div>
      <GoForIt link={indexFiles.frontmatter.url} />
    </>
  );
}
