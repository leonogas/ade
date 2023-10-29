import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkDown from "react-markdown";
import Card from "../components/Card";
import MainCard from "../components/MainCard";

export default async function Blog() {
  const postsDirectory = path.join(process.cwd(), "teste");
  const folders = fs
    .readdirSync(postsDirectory)
    .filter((entry) =>
      fs.statSync(path.join(postsDirectory, entry)).isDirectory()
    );
  console.log("--------------------------");
  console.log("All folders: " + folders);
  console.log("--------------------------");

  const indexFiles = {};

  folders.forEach((folder) => {
    const folderPath = path.join(postsDirectory, folder);
    const folderContents = fs.readdirSync(folderPath);

    if (folderContents.includes("_index.md")) {
      const indexPath = path.join(folderPath, "_index.md");
      const markdownWithMeta = fs.readFileSync(indexPath, "utf-8");
      const { data: frontmatter, content } = matter(markdownWithMeta);
      indexFiles[folder] = { id: folderPath, frontmatter, content };
    }
  });

  //console.log(indexFiles);
  Object.keys(indexFiles).map((folderName, i) =>
    console.log(indexFiles[folderName].id)
  );

  return (
    <>
      {Object.keys(indexFiles).map((folderName, i) => (
        //<Card key={indexFiles[folderName].id} item={indexFiles[folderName]} />
        <MainCard
          key={indexFiles[folderName].id}
          item={indexFiles[folderName]}
        />
      ))}
    </>
  );
}
