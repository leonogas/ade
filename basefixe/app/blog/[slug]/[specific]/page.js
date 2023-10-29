import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkDown from "react-markdown";

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

  console.log(indexFiles.id);

  return (
    <>
      <div className="... flex items-center justify-center">
        <ul>
          <article className="prose lg:prose-xl">
            <ReactMarkDown>{indexFiles.content}</ReactMarkDown>
          </article>
        </ul>
      </div>
    </>
  );
}
