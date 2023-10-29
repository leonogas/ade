import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkDown from "react-markdown";
import CardCategogy from "../../components/CardCategogy";

export default async function Page({ params }) {
  const { slug } = params;
  const slugFolder = path.join(process.cwd(), "teste", slug);

  // Read all files in the slug folder
  const files = fs.readdirSync(slugFolder);

  // Filter out files that are not _index.md
  const mdFiles = files.filter(
    (file) => file.endsWith(".md") && file !== "_index.md"
  );

  // Now you have an array of .md files in the slug folder
  console.log(mdFiles);

  const indexFiles = {};
  mdFiles.forEach((each) => {
    const folderPath = path.join(process.cwd(), "teste", slug, each);

    const markdownWithMeta = fs.readFileSync(folderPath, "utf-8");
    const { data: frontmatter, content } = matter(markdownWithMeta);
    indexFiles[each] = { id: folderPath, frontmatter, content };
  });

  //console.log(Object.keys);
  Object.keys(indexFiles).map((folderName, i) =>
    console.log(indexFiles[folderName].id)
  );

  return (
    <>
      <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {Object.keys(indexFiles).map((folderName, i) => (
          <CardCategogy
            key={indexFiles[folderName].id}
            item={indexFiles[folderName]}
          />
        ))}
      </main>
      {/*<div className="... flex items-center justify-center">
        <ul>
          {Object.keys(indexFiles).map((folderName, i) => (
            <li key={i}>
              Folder: {folderName}
              <br />
              <article className="prose lg:prose-xl">
                <ReactMarkDown>{indexFiles[folderName].content}</ReactMarkDown>
              </article>
            </li>
          ))}
        </ul>
      </div>
      */}
    </>
  );
}
